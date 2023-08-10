import { join } from 'path'
import fs from 'fs'
import crypto from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const fileBlob: String | null = request.body as String | null

  if (!fileBlob) {
    return NextResponse.json({ error: 'No file received' }, { status: 400 })
  }
  const tempPath = join(process.cwd(), 'temp')

  if (!fs.existsSync(tempPath)) {
    fs.mkdirSync(tempPath)
  }
  const filePath = join(tempPath, crypto.randomUUID())

  try {
    await fs.promises.writeFile(filePath, fileBlob)

    try {
    } catch (error) {
      console.error('Erro ao processar o PDF:', error)
    }

    await fs.promises.unlink(filePath)
  } catch (error) {
    await fs.promises.unlink(filePath)
    return NextResponse.json({ error: 'Error while processing file' }, { status: 500 })
  }

  return NextResponse.json({ message: 'File processed' })
}
