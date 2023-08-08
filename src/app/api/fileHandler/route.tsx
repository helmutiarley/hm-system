import { writeFile } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.formData()
  console.log(data)
  const file: File | null = data.get('file') as unknown as File

  if(!file) {
    return NextResponse.json({sucess: false})
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  console.log(buffer)

  console.log("POST RECEBIDO")
  return NextResponse.json({sucess: true})
}
