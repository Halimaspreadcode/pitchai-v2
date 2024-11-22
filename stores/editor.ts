import { create } from 'zustand'
import { fabric } from 'fabric'

interface EditorStore {
  canvas: fabric.Canvas | null
  slides: any[]
  currentSlideIndex: number
  setCanvas: (canvas: fabric.Canvas) => void
  addSlide: (slide: any) => void
  setCurrentSlide: (index: number) => void
}

export const useEditorStore = create<EditorStore>((set) => ({
  canvas: null,
  slides: [],
  currentSlideIndex: 0,
  setCanvas: (canvas) => set({ canvas }),
  addSlide: (slide) => set((state) => ({ slides: [...state.slides, slide] })),
  setCurrentSlide: (index) => set({ currentSlideIndex: index })
}))