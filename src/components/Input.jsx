import { forwardRef } from 'react'
import clsx from 'clsx'

export const Input = forwardRef(function Input({ label, hint, error, id, className, ...props }, ref) {
  const inputId = id ?? props.name
  return (
    <div className="w-full">
      {label && <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-slate-700">{label}</label>}
      <input
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error || hint ? `${inputId}-help` : undefined}
        className={clsx('w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-4', error ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-100' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100', className)}
        {...props}
      />
      {(error || hint) && <p id={`${inputId}-help`} className={clsx('mt-2 text-xs', error ? 'text-rose-600' : 'text-slate-500')}>{error || hint}</p>}
    </div>
  )
})
