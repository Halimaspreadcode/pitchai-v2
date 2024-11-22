"use client"

import { useEditorStore } from '@/stores/editor'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export function SlidesList() {
  const { slides, currentSlideIndex, setCurrentSlide } = useEditorStore()

  return (
    <div className="h-32 border-t bg-white p-4">
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="slides" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex space-x-4"
            >
              {slides.map((slide, index) => (
                <Draggable key={slide.id} draggableId={slide.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`
                        w-48 h-24 rounded border-2 cursor-pointer
                        ${currentSlideIndex === index ? 'border-orange-500' : 'border-neutral-200'}
                      `}
                      onClick={() => setCurrentSlide(index)}
                    >
                      {/* Miniature de la slide */}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}