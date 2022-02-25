import { InputHTMLAttributes } from 'react'

import styles from './InputField.module.css'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputField = (props: InputFieldProps) => {
  return (
    <input className={styles.input} {...props}/>
  )
}
