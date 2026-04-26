'use client'

import { useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: ReactNode
    closeOnOverlay?: boolean
    closeOnEscape?: boolean
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    closeOnOverlay = true,
    closeOnEscape = true,
}: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)
    const previousActiveElement = useRef<Element | null>(null)

    useEffect(() => {
        if (isOpen) {
            previousActiveElement.current = document.activeElement
            document.body.style.overflow = 'hidden'
            setTimeout(() => {
                modalRef.current?.focus()
            }, 0)
        } else {
            document.body.style.overflow = ''
            if (previousActiveElement.current instanceof HTMLElement) {
                previousActiveElement.current.focus()
            }
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    useEffect(() => {
        if (!closeOnEscape || !isOpen) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault()
                onClose()
            }
        }

        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose, closeOnEscape])

    useEffect(() => {
        if (!isOpen) return
        const modal = modalRef.current
        if (!modal) return

        const focusableElements = modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault()
                    last?.focus()
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault()
                    first?.focus()
                }
            }
        }

        modal.addEventListener('keydown', handleTab)
        return () => modal.removeEventListener('keydown', handleTab)
    }, [isOpen])

    if (!isOpen) return null

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--primary-black-50)] backdrop-blur-sm"
            onClick={(e) => {
                if (closeOnOverlay && e.target === e.currentTarget) {
                    onClose()
                }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
        >
            {/* ✅ ИЗМЕНЕНИЕ 1: Ограничиваем высоту и добавляем flex-структуру */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-white rounded-xl shadow-xl outline-none flex flex-col max-h-[90vh]"
                tabIndex={-1}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition z-10"
                    aria-label="Закрыть"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {/* Заголовок (фиксированный) */}
                {title && (
                    <div className="px-6 pt-6 pb-4 border-b border-gray-200 flex-shrink-0">
                        <h2 id="modal-title" className="text-xl font-semibold text-gray-900">
                            {title}
                        </h2>
                    </div>
                )}

                {/* ✅ ИЗМЕНЕНИЕ 2: Контент с прокруткой */}
                <div className="px-6 py-4 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}