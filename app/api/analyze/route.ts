import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      )
    }

    // Extraction du contenu du fichier
    const buffer = await file.arrayBuffer()
    const content = await extractContent(buffer, file.type)
    
    // Analyse avec Claude
    const analysis = await fetch('https://bvcpbunsnjjdtwkuzlnj.supabase.co/functions/v1/analyze-pitch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pitchContent: content })
    }).then(res => res.json())
    
    return NextResponse.json({ analysis })
    
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    )
  }
}

async function extractContent(buffer: ArrayBuffer, type: string) {
  if (type === 'application/pdf') {
    const pdf = require('pdf-parse')
    const data = await pdf(Buffer.from(buffer))
    return data.text
  }
  
  if (type.includes('presentation')) {
    const pptx = require('pptx-parser')
    const data = await pptx.parseBuffer(buffer)
    return data.slides.map((s: any) => s.text).join('\n')
  }
  
  throw new Error('Format de fichier non supporté')
}