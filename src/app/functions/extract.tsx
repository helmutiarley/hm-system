import JSZip from 'jszip'

export async function ExtractFiles(file: File) {
  try {
    const zipData = await file.arrayBuffer()

    await JSZip.loadAsync(file).then((zip: JSZip) => {
      Object.keys(zip.files).forEach((filename) => {
        let content = zip.file(filename)?.async('string')
        let newFilename = filename.replace(' ', '_')

        console.log(content, newFilename)
      })

      zip.generateAsync({ type: 'blob' }).then((content) => {
        console.log(content)
      })
    })
  } catch (error) {
    console.error('Erro:', error)
  }
}
