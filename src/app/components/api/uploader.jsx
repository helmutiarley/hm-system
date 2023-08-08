import React from 'react';
import FileUpload from '../api/input';

function UploadPage() {
  const handleUpload = async (file) => {
    if (!file) return

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Capturar a resposta do servidor após o upload ser processado
        const result = await response.text();
        console.log('Resposta do servidor:', result);
      } else {
        console.error('Erro ao enviar arquivo');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <h1>Upload de Arquivo ZIP</h1>
      <FileUpload onUpload={handleUpload} />
    </div>
  );
}

export default UploadPage;
