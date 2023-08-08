import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  // console.log(data)
  const file: File | null = data.get('file') as unknown as File

  if(!file) return NextResponse.json({sucess: false})

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  // console.log(buffer)

  const path = join('/', 'tmp', file.name)
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

  return NextResponse.json({sucess: true})
}
