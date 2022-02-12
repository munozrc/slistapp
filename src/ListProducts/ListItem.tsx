import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from "./ListItem.module.css"

interface ListItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string
  children?: ReactNode
}

export const ListItem = ({title, children, ...props}: ListItemProps) => {
  return (
    <button className={styles.listItemContainer} {...props}>
      {title && <h4>{title}</h4>}
      {children}
    </button>
  )
}