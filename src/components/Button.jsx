import clsx from 'clsx'

const variants = {
  primary: 'bg-emerald-700 text-white hover:bg-emerald-800 focus-visible:ring-emerald-600',
  secondary: 'bg-white text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus-visible:ring-slate-400',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-400',
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
  const sizes = { sm: 'px-3 py-1.5 text-xs', md: 'px-4 py-2.5 text-sm', lg: 'px-5 py-3 text-sm' }
  return (
    <button
      className={clsx('inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50', variants[variant] ?? variants.primary, sizes[size] ?? sizes.md, className)}
      {...props}
    >
      {children}
    </button>
  )
}
