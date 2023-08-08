import JSZip from 'jszip'

export async function ExtractFiles(file: File) {
  try {
    await JSZip.loadAsync(file).then((zip: JSZip) => {
      Object.keys(zip.files).forEach(async (filename) => {
        if (!filename.includes('.pdf')) {
          return zip.remove(filename)
        }
        let zipObject = zip.file(filename)

        zipObject?.async('arraybuffer').then(async (arrayBuffer) => {
          console.log(arrayBuffer)
        })
      })

      zip.generateAsync({ type: 'blob' }).then((content) => {
        console.log('blob:', content)
      })
    })
  } catch (error) {
    console.error('Error:', error)
  }
}
