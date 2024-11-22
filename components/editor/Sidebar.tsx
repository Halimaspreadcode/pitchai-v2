"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Templates } from './sidebar/Templates'
import { Elements } from './sidebar/Elements'
import { AIAssistant } from './sidebar/AIAssistant'
import { ImageLibrary } from './sidebar/ImageLibrary'

export function Sidebar() {
  return (
    <div className="w-80 border-r bg-white">
      <Tabs defaultValue="templates">
        <TabsList className="w-full">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="elements">Éléments</TabsTrigger>
          <TabsTrigger value="ai">IA</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>
        
        <TabsContent value="templates">
          <Templates />
        </TabsContent>
        
        <TabsContent value="elements">
          <Elements />
        </TabsContent>
        
        <TabsContent value="ai">
          <AIAssistant />
        </TabsContent>
        
        <TabsContent value="images">
          <ImageLibrary />
        </TabsContent>
      </Tabs>
    </div>
  )
}