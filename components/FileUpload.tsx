"use client"

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, Loader2 } from 'lucide-react'
import { toast } from 'sonner'

export function FileUpload() {
  const [isUploading, setIsUploading] = useState(false)
  
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return
    
    setIsUploading(true)
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      // Appel à l'API d'analyse
      const response = await fetch('/api/analyze', {
        method: 'POST',
        body: formData
      })
      
      if (!response.ok) throw new Error('Erreur lors de l'analyse')
      
      const data = await response.json()
      toast.success('Analyse terminée avec succès!')
      
    } catch (error) {
      toast.error('Une erreur est survenue')
    } finally {
      setIsUploading(false)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    },
    maxFiles: 1
  })

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-12
        ${isDragActive ? 'border-orange-500 bg-orange-50' : 'border-neutral-300'}
        transition-colors duration-200 cursor-pointer
        flex flex-col items-center justify-center space-y-4
      `}
    >
      <input {...getInputProps()} />
      
      {isUploading ? (
        <Loader2 className="h-12 w-12 text-orange-500 animate-spin" />
      ) : (
        <Upload className="h-12 w-12 text-orange-500" />
      )}
      
      <div className="text-center">
        <p className="text-lg font-medium">
          {isDragActive ? 'Déposez votre fichier ici' : 'Déposez votre présentation ici'}
        </p>
        <p className="text-sm text-neutral-500 mt-1">
          Formats acceptés: PDF, PPTX
        </p>
      </div>
    </div>
  )
}