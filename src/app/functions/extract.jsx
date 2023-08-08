import AdmZip from 'adm-zip'

export default function extract() {
    const extractZipFile = () => {
        const zip = new AdmZip('path/to/your/zipfile.zip'); // Substitua pelo caminho do seu arquivo zip
        zip.extractAllTo('path/to/extract/folder'); // Substitua pelo caminho da pasta onde deseja extrair os arquivos
      };
    
      return (
        <div>
          <button onClick={extractZipFile}>Extrair Arquivo ZIP</button>
        </div>
      );
    }