import JSZip from 'jszip'

export default async function ZipProcessor(file: File, progress: any) {
  const arrayBuffer = await file.arrayBuffer()
  const progressRef = progress?.current

  try {
    progressRef?.setProcessing(true)
    progressRef?.setFilename(file.name)
    progressRef?.setCurrentAmount(0)
    progressRef?.setProcessPercentage(0)
    progressRef?.setCurrentFilename('')

    await JSZip.loadAsync(arrayBuffer).then((zip: JSZip) => {
      const files = zip.files
      const filesKeys = Object.keys(files)
      const filesLength = filesKeys.length

      let proccessedFiles = 0
      progressRef?.setMaxAmount(filesLength)

      filesKeys.forEach(async (filename) => {
        console.log('Processing file:', filename)
        progressRef?.setCurrentFilename(filename)

        if (filename.includes('.pdf')) {
          let zipObject = zip.file(filename)

          await zipObject?.async('string').then(async (content) => {
            try {
              const data = new FormData()
              data.set('file', content)

              await fetch('/api/pdf-processor', {
                method: 'POST',
                body: data
              }).then((response) => {
                if (response.ok) {
                  console.log('File processed:', filename)
                } else {
                  console.log('Error:', response.statusText)
                }
              })
            } catch (error) {
              console.log('Error:', error)
            }
          })
        } else {
          zip.remove(filename)
        }
        proccessedFiles++

        progressRef?.setCurrentFilename(filename)
        progressRef?.updateProgress(proccessedFiles, (proccessedFiles / filesLength) * 100)

        if (proccessedFiles == filesLength) {
          console.log('Files processed!')
          setTimeout(() => {
            progressRef?.setProcessing(false)
          }, 300)
        }
      })
    })
  } catch (error) {
    console.error('Error:', error)
    progressRef?.setProcessing(false)
  }
}
