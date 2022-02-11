import styles from "./ListItem.module.css"

interface ListItemProps {
  title: string
}

export const ListItem = ({title}: ListItemProps) => {
  return (
    <article className={styles.listItemContainer}>
      <h4>{title}</h4>
    </article>
  )
}