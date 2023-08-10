'use client'

import { useRef } from 'react'
import ZipProcessor from '../processor/zip-processor'

interface InputProps {
  progress: any
}

const Input: React.FC<InputProps> = ({ progress }) => {
  const fileInput = useRef<HTMLInputElement>(null)

  const onFileChange = async () => {
    if (fileInput.current?.files) {
      const [file] = fileInput.current.files

      if (file?.size > 0 && file.type == 'application/x-zip-compressed') {
        await ZipProcessor(file, progress)
        fileInput.current.value = ''
      } else {
        console.log('Error: Invalid file, please upload a zip file.')
      }
    }
  }

  return (
    <>
      <input type="file" id="file" hidden ref={fileInput} onChange={onFileChange} />
    </>
  )
}

export default Input
