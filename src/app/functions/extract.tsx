import JSZip from 'jszip'
import fs from 'fs' // Importar o módulo de sistema de arquivos do Node.js

export async function ExtractFiles(file: File) {
  const zip = new JSZip()
  console.log('Chegou aqui', await file.arrayBuffer())

  try {
    const zipData = await file.arrayBuffer()
    await zip.loadAsync(zipData)

    const outputFolderPath = '../../' // Pasta de saída para salvar os arquivos extraídos

    if (!fs.existsSync(outputFolderPath)) {
      fs.mkdirSync(outputFolderPath) // Cria a pasta de saída se ela não existir
    }

    zip.forEach(async (relativePath, zipEntry) => {
      if (!zipEntry.dir) {
        const content = await zipEntry.async('uint8array')
        const outputPath = `${outputFolderPath}/${relativePath}`

        fs.writeFileSync(outputPath, Buffer.from(content)) // Salva o conteúdo extraído no arquivo
      }
    })
  } catch (error) {
    console.error('Erro:', error)
  }
}
