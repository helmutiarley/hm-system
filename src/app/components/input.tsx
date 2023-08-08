'use client'

import { useRef } from 'react'
import { ExtractFiles } from '../functions/extract'

export default function input() {
  const fileInput = useRef<HTMLInputElement>(null)

  const onFileChange = async () => {
    if (fileInput.current?.files) {
      const [file] = fileInput.current.files

      if (file?.size > 0 && file.type == 'application/x-zip-compressed') {
        ExtractFiles(file)

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
