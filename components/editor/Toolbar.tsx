"use client"

import { useCallback } from 'react'
import { 
  Undo, Redo, Image, Type, Shapes, ChartBar, 
  Layout, Grid, AlignLeft, Download, Play,
  Wand2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEditorStore } from '@/stores/editor'
import { toast } from 'sonner'

export function Toolbar() {
  const { canvas } = useEditorStore()

  const handleAIOptimize = useCallback(async () => {
    toast.promise(
      async () => {
        // Appel à l'API d'optimisation IA
        await new Promise(resolve => setTimeout(resolve, 1500))
      },
      {
        loading: 'Optimisation en cours...',
        success: 'Présentation optimisée !',
        error: 'Erreur lors de l\'optimisation'
      }
    )
  }, [])

  return (
    <div className="h-16 border-b bg-white px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Redo className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-neutral-200 mx-2" />
        <Button variant="ghost" size="icon">
          <Image className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Type className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Shapes className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChartBar className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Layout className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="outline" onClick={handleAIOptimize}>
          <Wand2 className="h-4 w-4 mr-2" />
          Optimiser avec l'IA
        </Button>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exporter
        </Button>
        <Button>
          <Play className="h-4 w-4 mr-2" />
          Présenter
        </Button>
      </div>
    </div>
  )
}