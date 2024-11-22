"use client"

import { EditorCanvas } from '@/components/editor/EditorCanvas'
import { Toolbar } from '@/components/editor/Toolbar'
import { Sidebar } from '@/components/editor/Sidebar'
import { SlidesList } from '@/components/editor/SlidesList'
import { AIAssistant } from '@/components/editor/AIAssistant'

export default function EditorPage() {
  return (
    <div className="h-screen flex flex-col">
      <Toolbar />
      <div className="flex-1 flex">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <EditorCanvas />
          <SlidesList />
        </main>
        <AIAssistant />
      </div>
    </div>
  )
}