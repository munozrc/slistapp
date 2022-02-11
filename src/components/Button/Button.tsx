import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: string
  children: ReactNode
}

export const Button = ({ variant = 'flat', children }: ButtonProps) => {
  return <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
}