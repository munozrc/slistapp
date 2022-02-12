import { PlusIcon } from "../components/Icons"
import { ListItem } from "./ListItem"
import styles from "./ListProducts.module.css"

export const ListProducts = () => {
  return (
    <section className={styles.listProductsContainer}>
      <ListItem>
        <p>Nuevo elemento</p>
        <PlusIcon />
      </ListItem>
      <ListItem title="Pan"/>
    </section>
  )
}