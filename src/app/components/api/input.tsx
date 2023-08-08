"use client"

import { useState } from 'react'

export default function input() {
  const [selectedFile, setSelectedFile] = useState<File>();

  const submitHandler = async (e: any) => {
    e.preventDefault()
    console.log("deu bom")

    if(!selectedFile) return

  try {
    const data = new FormData()
    data.set('file', selectedFile)
  
    const res = await fetch('/api/fileHandler', {
      method: "POST",
      body: data
    })
    if(!res) console.log("deu bom")
  } catch (e: any) {
    console.log(e)
  }

 }  

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type="file" id="file" hidden onChange={(e) => setSelectedFile(e.target.files?.[0])} />
        <button onSubmit={submitHandler}>Submit</button>
      </form>
    </>
  )
}
