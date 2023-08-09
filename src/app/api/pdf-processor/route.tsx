import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('file') as File

  if (!file) {
    return NextResponse.json({ success: false })
  }
  console.log(file)
  return NextResponse.json({ sucess: true })
}
