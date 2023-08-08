"use client"

import { useRef } from "react"

// import AdmZip from 'adm-zip'

export default function input() {
  // const fileInputRef = useRef(null);

  // const extractZipFile = () => {
  //   const selectedFile = fileInputRef.current.files[0];

  //   if (selectedFile) {
  //     const zip = new AdmZip(selectedFile.path);
  //     zip.extractAllTo('../../temp');
  //   }
  // };
  const fileInput = useRef<HTMLInputElement>(null)

  const onFileChange = () => {
    
    if (fileInput.current?.files) {
      const [file] = fileInput.current.files

      if (file) {
        console.log("tem arquivo: ", file)
      }
    }
  }
    
      return (
        // <div>
        //   <button onClick={extractZipFile}>Extrair Arquivo ZIP</button>
        // </div>
        <>
        <input type="file" id="file" hidden ref={fileInput} onChange={onFileChange}/>
        </>
      );
    }