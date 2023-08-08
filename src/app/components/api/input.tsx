"use client"

import { useState } from 'react'



export default function input() {
  const [selectedFile, setSelectedFile] = useState<File>();

  const submitHandler = async (e: any) => {
    e.preventDefault()
    if(!selectedFile) return

  try {
    const data = new FormData()
    data.set('file', selectedFile)
  
    const res = await fetch('/api/fileHandler', {
      method: "POST",
      body: data
    })
    // handle the error
    if(!res) console.log("deu bom")
  } catch (e: any) {
    console.log(e)
  }

 }  

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="file" id="file" hidden onChange={(e) => setSelectedFile(e.target.files?.[0])} />
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}
