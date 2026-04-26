'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import Button from '../button'

export type FieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'file'

export interface Field {
  name: string
  label?: string | React.ReactNode
  type: FieldType
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  rows?: number
  accept?: string
  multiple?: boolean
  helperText?: React.ReactNode
}

interface SimpleFormProps {
  fields: Field[]
  formAction?: string
  onSubmit?: (data: Record<string, any> | FormData) => Promise<void>
  buttonText?: string
  className?: string
}

export default function Form({
  fields,
  formAction,
  onSubmit,
  buttonText = 'Отправить',
  className = ''
}: SimpleFormProps) {
  const [values, setValues] = useState<Record<string, any>>({})
  const [files, setFiles] = useState<Record<string, File | File[]>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [formError, setFormError] = useState('')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    fields.forEach(field => {
      if (!field.required) return

      if (field.type === 'checkbox') {
        if (!values[field.name]) {
          newErrors[field.name] = 'Необходимо подтвердить согласие'
        }
        return
      }

      if (field.type === 'file') {
        if (!files[field.name]) {
          newErrors[field.name] = 'Прикрепите файл'
        }
        return
      }

      if (!values[field.name] || String(values[field.name]).trim() === '') {
        newErrors[field.name] = 'Заполните это поле'
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      setFormError('Одно или несколько полей не заполнены. Пожалуйста, проверьте форму и попробуйте снова.')
      return false
    }

    setFormError('')
    return true
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target

    if (type === 'file') {
      const target = e.target as HTMLInputElement
      const selectedFiles = target.files

      if (selectedFiles && selectedFiles.length > 0) {
        const isMultiple = target.multiple === true
        setFiles(prev => ({
          ...prev,
          [name]: isMultiple ? Array.from(selectedFiles) : selectedFiles[0]
        }))
      }
    } else {
      setValues(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }))
    }

    setErrors(prev => ({
      ...prev,
      [name]: ''
    }))

    setFormError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const isValid = validateForm()
    if (!isValid) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const hasFiles = Object.keys(files).length > 0

      if (formAction) {
        const formData = new FormData()

        Object.entries(values).forEach(([key, value]) => {
          if (value === undefined || value === null) return

          if (typeof value === 'boolean') {
            if (value) formData.append(key, 'on')
            return
          }

          if (value !== '') formData.append(key, String(value))
        })

        Object.entries(files).forEach(([key, file]) => {
          if (Array.isArray(file)) {
            file.forEach(f => formData.append(key, f))
          } else if (file) {
            formData.append(key, file)
          }
        })

        const response = await fetch(formAction, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        })

        if (!response.ok) {
          const data = await response.json().catch(() => ({}))
          const msg =
            data?.error ??
            (Array.isArray(data?.errors)
              ? data.errors
                  .map((e: { message?: string }) => e.message)
                  .filter(Boolean)
                  .join(', ')
              : undefined)

          throw new Error(msg || 'Не удалось отправить сообщение')
        }
      } else if (onSubmit) {
        if (hasFiles) {
          const formData = new FormData()

          Object.entries(values).forEach(([key, value]) => {
            if (value !== undefined && value !== '') {
              formData.append(key, String(value))
            }
          })

          Object.entries(files).forEach(([key, file]) => {
            if (Array.isArray(file)) {
              file.forEach(f => formData.append(key, f))
            } else if (file) {
              formData.append(key, file)
            }
          })

          await onSubmit(formData)
        } else {
          await onSubmit(values)
        }
      } else {
        throw new Error('Указать formAction (URL send.php) или onSubmit')
      }

      setStatus('success')
      setValues({})
      setFiles({})
      setErrors({})
      setFormError('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch {
      setStatus('error')
      if (!formError) {
        setFormError('Не удалось отправить форму. Попробуйте ещё раз.')
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full space-y-4 ${className}`}
      encType="multipart/form-data"
      noValidate
    >
      {fields.map(field => {
        const hasError = !!errors[field.name]

        return (
          <div key={field.name}>
            {field.label && field.type !== 'checkbox' && (
              <label className="block text-sm font-medium mb-1">
                {field.label}
                {field.required && <span className="text-var--secondary-red"> *</span>}
              </label>
            )}

            {field.type === 'textarea' ? (
              <>
                <textarea
                  name={field.name}
                  value={values[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  rows={field.rows || 4}
                  className={`w-full px-3 py-2 border bg-var--primary-white text-var--primary-black rounded-lg focus:outline-none focus:ring-2 ${
                    hasError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-var--secondary-lightGrey focus:ring-accent'
                  }`}
                />
                {hasError && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
              </>
            ) : field.type === 'select' ? (
              <>
                <select
                  name={field.name}
                  value={values[field.name] || ''}
                  onChange={handleChange}
                  required={field.required}
                  className={`w-full px-3 py-2 border bg-var--primary-white rounded-lg text-var--primary-black focus:outline-none focus:ring-2 ${
                    hasError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-var--secondary-lightGrey focus:ring-accent'
                  }`}
                >
                  <option value="">Выберите</option>
                  {field.options?.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {hasError && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
              </>
            ) : field.type === 'checkbox' ? (
              <>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={field.name}
                    checked={values[field.name] || false}
                    onChange={handleChange}
                    required={field.required}
                    className={`w-4 h-4 mt-1 flex-shrink-0 ${
                      hasError ? 'accent-red-500' : 'accent-accent'
                    }`}
                  />
                  <span className="text-sm leading-tight">{field.label}</span>
                </label>
                {hasError && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
                {field.helperText && (
                  <p className="mt-1 text-sm text-var--primary-grey">{field.helperText}</p>
                )}
              </>
            ) : field.type === 'file' ? (
              <>
                <input
                  type="file"
                  name={field.name}
                  onChange={handleChange}
                  required={field.required}
                  accept={field.accept}
                  multiple={field.multiple === true ? true : undefined}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-var--primary-accent file:text-white file:cursor-pointer hover:file:bg-var--primary-accent-hover ${
                    hasError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-var--secondary-lightGrey focus:ring-accent'
                  }`}
                />
                {field.helperText && (
                  <p className="mt-1 text-sm text-var--primary-grey">{field.helperText}</p>
                )}
                {files[field.name] && (
                  <p className="mt-2 text-sm text-var--secondary-green">
                    {(() => {
                      const selected = files[field.name]
                      if (!selected) return null
                      return Array.isArray(selected)
                        ? `✓ Выбрано файлов: ${selected.length}`
                        : `✓ Файл: ${selected.name}`
                    })()}
                  </p>
                )}
                {hasError && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
              </>
            ) : (
              <>
                <input
                  type={field.type}
                  name={field.name}
                  value={values[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className={`w-full px-3 py-2 border text-var--primary-black bg-var--primary-white rounded-lg focus:outline-none focus:ring-2 ${
                    hasError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-var--secondary-lightGrey focus:ring-accent'
                  }`}
                />
                {hasError && <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>}
              </>
            )}
          </div>
        )
      })}

      {formError && (
        <div className="border border-yellow-500 bg-yellow-50 text-red-600 px-4 py-3 rounded-lg text-sm">
          {formError}
        </div>
      )}

      <Button
        className={status === 'success' ? 'bg-var--secondary-green' : status === 'error' ? 'bg-var--secondary-red' : ''}
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading'
          ? 'Отправка...'
          : status === 'success'
          ? 'Отправлено'
          : buttonText}
      </Button>
    </form>
  )
}