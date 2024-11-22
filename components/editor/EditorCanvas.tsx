"use client"

import { useEffect, useRef } from 'react'
import { fabric } from 'fabric'
import { useEditorStore } from '@/stores/editor'

export function EditorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { setCanvas, currentSlide } = useEditorStore()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 1280,
      height: 720,
      backgroundColor: '#ffffff'
    })

    setCanvas(canvas)

    return () => {
      canvas.dispose()
    }
  }, [])

  return (
    <div className="flex-1 flex items-center justify-center bg-neutral-100 p-8">
      <div className="shadow-2xl">
        <canvas ref={canvasRef} />
      </div>
    </div>
  )
}