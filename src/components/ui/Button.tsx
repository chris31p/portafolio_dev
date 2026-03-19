import type { ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick
}: ButtonProps) => {
  const className = `button ${variant}`

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}
