import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { file } = req.files;
    const extractedFiles = await ExtractFiles(file.data); // Chamar a função para extrair os arquivos

    // Aqui você pode fazer o que quiser com os arquivos extraídos
    console.log('Arquivos extraídos:', extractedFiles);

    res.status(200).send('Arquivo ZIP processado com sucesso.');
  } catch (error) {
    console.error('Erro ao processar o arquivo ZIP:', error);
    res.status(500).send('Erro ao processar o arquivo ZIP.');
  }
}
