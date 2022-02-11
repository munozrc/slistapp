import { ListItem } from './ListItem'
import styles from './ListProducts.module.css'

export const ListProducts = () => {
  return (
    <section className={styles.listProductsContainer}>
      <ListItem title="Pan"/>
    </section>
  )
}