import { ReactNode } from "react"
import styles from "./ListItem.module.css"

interface ListItemProps {
  title?: string
  children?: ReactNode
}

export const ListItem = ({title, children}: ListItemProps) => {
  return (
    <article className={styles.listItemContainer}>
      {title && <h4>{title}</h4>}
      {children}
    </article>
  )
}