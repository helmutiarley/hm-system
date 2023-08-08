'use client'

import { useRef } from 'react'
import { ExtractFiles } from '../functions/extract'

export default function input() {
  const fileInput = useRef<HTMLInputElement>(null)

  const onFileChange = async () => {
    if (fileInput.current?.files) {
      const [file] = fileInput.current.files

      if (file) {
        // ExtractFiles(file)
      }
    }
  }

  return (
    <>
      <input type="file" id="file" hidden ref={fileInput} onChange={onFileChange} />
    </>
  )
}
