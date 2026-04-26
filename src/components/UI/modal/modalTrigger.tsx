// components/UI/Modal/ModalTrigger.tsx
'use client'

import { useState, ReactNode } from 'react'
import Modal from './modal'


interface ModalTriggerProps {
  trigger: ReactNode  
  title?: string
  children: ReactNode 
}

export default function ModalTrigger({ trigger, title, children }: ModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="inline-block">
        {trigger}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title}>
        {children}
      </Modal>
    </>
  )
}