import { CheckCircle2, CircleAlert, TriangleAlert, X } from 'lucide-react'
import clsx from 'clsx'

const variants = {
  success: { style: 'border-emerald-200 bg-emerald-50 text-emerald-900', icon: CheckCircle2, title: 'Tudo certo!' },
  error: { style: 'border-rose-200 bg-rose-50 text-rose-900', icon: CircleAlert, title: 'Algo deu errado' },
  warning: { style: 'border-amber-200 bg-amber-50 text-amber-950', icon: TriangleAlert, title: 'Atenção' },
}

export function Alert({ variant = 'success', title, children, onClose, className, ...props }) {
  const config = variants[variant] ?? variants.success
  const Icon = config.icon
  return (
    <div role={variant === 'error' ? 'alert' : 'status'} className={clsx('flex gap-3 rounded-xl border p-4', config.style, className)} {...props}>
      <Icon size={19} className="mt-0.5 shrink-0" aria-hidden="true" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title ?? config.title}</p>
        {children && <div className="mt-1 text-sm leading-relaxed opacity-85">{children}</div>}
      </div>
      {onClose && <button type="button" onClick={onClose} aria-label="Fechar aviso" className="-mr-1 -mt-1 rounded-md p-1 opacity-60 transition hover:bg-black/5 hover:opacity-100"><X size={16} /></button>}
    </div>
  )
}
