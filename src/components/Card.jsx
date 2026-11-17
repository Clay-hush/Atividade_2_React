import clsx from 'clsx'

export function Card({ className, children, ...props }) {
  return <article className={clsx('rounded-2xl border border-slate-200 bg-white shadow-soft transition-shadow hover:shadow-lg', className)} {...props}>{children}</article>
}

export function CardHeader({ className, children, ...props }) {
  return <div className={clsx('border-b border-slate-100 px-5 py-4 sm:px-6', className)} {...props}>{children}</div>
}

export function CardContent({ className, children, ...props }) {
  return <div className={clsx('px-5 py-5 sm:px-6', className)} {...props}>{children}</div>
}

export function CardFooter({ className, children, ...props }) {
  return <div className={clsx('border-t border-slate-100 bg-slate-50/70 px-5 py-4 sm:px-6', className)} {...props}>{children}</div>
}
