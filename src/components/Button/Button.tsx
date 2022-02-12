import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  variant?: string
}

export const Button = ({ variant = 'flat', children, ...props }: ButtonProps) => {
  return <button className={`${styles.btn} ${styles[variant]}`} {...props}>{children}</button>
}