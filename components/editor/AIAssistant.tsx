"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { 
  Wand2, 
  MessageSquare, 
  Sparkles,
  LayoutTemplate,
  PenTool,
  Target,
  Palette
} from 'lucide-react'

export function AIAssistant() {
  const [prompt, setPrompt] = useState('')

  const features = [
    {
      icon: Wand2,
      title: 'Optimisation Automatique',
      action: () => {},
      description: 'Optimiser automatiquement la mise en page'
    },
    {
      icon: MessageSquare,
      title: 'Suggestions de Contenu',
      action: () => {},
      description: 'Générer du contenu pertinent'
    },
    {
      icon: LayoutTemplate,
      title: 'Restructuration',
      action: () => {},
      description: 'Réorganiser les sections'
    },
    {
      icon: PenTool,
      title: 'Réécriture',
      action: () => {},
      description: 'Améliorer le style rédactionnel'
    },
    {
      icon: Target,
      title: 'Analyse d\'Impact',
      action: () => {},
      description: 'Évaluer l\'efficacité'
    },
    {
      icon: Palette,
      title: 'Style Visuel',
      action: () => {},
      description: 'Optimiser le design'
    }
  ]

  return (
    <div className="w-80 border-l bg-white p-4 space-y-6">
      <div className="space-y-2">
        <h3 className="font-semibold">Assistant IA</h3>
        <Textarea
          placeholder="Posez une question ou demandez une amélioration..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="h-24"
        />
        <Button className="w-full">
          <MessageSquare className="h-4 w-4 mr-2" />
          Envoyer
        </Button>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm text-neutral-500">
          Optimisations Automatiques
        </h4>
        <div className="grid gap-2">
          {features.map((feature, index) => (
            <Button
              key={index}
              variant="outline"
              className="justify-start"
              onClick={feature.action}
            >
              <feature.icon className="h-4 w-4 mr-2" />
              <div className="text-left">
                <div className="text-sm font-medium">{feature.title}</div>
                <div className="text-xs text-neutral-500">
                  {feature.description}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}