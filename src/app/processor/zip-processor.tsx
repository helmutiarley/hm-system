import JSZip from 'jszip'
import { basename } from 'path'
import { saveAs } from 'file-saver'

export default async function ZipProcessor(file: File, progress: any) {
  const arrayBuffer = await file.arrayBuffer()
  const progressRef = progress?.current

  try {
    progressRef?.setProcessing(true)
    progressRef?.setFilename(file.name)
    progressRef?.setCurrentAmount(0)
    progressRef?.setProcessPercentage(0)
    progressRef?.setCurrentFilename('')

    setTimeout(async () => {
      await JSZip.loadAsync(arrayBuffer).then((zip: JSZip) => {
        const files = zip.files
        const filesKeys = Object.keys(files)
        const filesLength = filesKeys.length

        let proccessedFiles = 0
        progressRef?.setMaxAmount(filesLength)

        filesKeys.forEach(async (filepath) => {
          setTimeout(async () => {
            const filename = basename(filepath)
            progressRef?.setCurrentFilename(filename)

            if (filename.includes('.pdf')) {
              let zipObject = zip.file(filepath)

              await zipObject?.async('blob').then(async (blob: Blob) => {
                try {
                  await fetch('/api/pdf-processor', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/octet-stream'
                    },
                    body: blob
                  }).then(async (response) => {
                    const data = await response.json()

                    if (response.ok) {
                      zip.remove(filepath)
                    } else {
                      console.log('Error:', data.error)
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
              console.log('Starting download...')

              zip.generateAsync({ type: 'blob' }).then((content) => {
                const currentDate = new Date()
                const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(
                  currentDate.getMonth() + 1
                )
                  .toString()
                  .padStart(2, '0')}/${currentDate.getFullYear()}-${currentDate
                  .getHours()
                  .toString()
                  .padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`
                const formattedDateWithHyphens = formattedDate.replace(/_/g, '-')

                //saveAs(content, file.name.replace('.zip', `-${formattedDateWithHyphens}-processed.zip`))
              })

              setTimeout(() => {
                progressRef?.setProcessing(false)
              }, 1000)
            }
          }, 1)
        })
      })
    }, 1)
  } catch (error) {
    console.error('Error:', error)
    progressRef?.setProcessing(false)
  }
}
