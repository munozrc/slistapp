import { PlusIcon } from "../components/Icons"
import { useView } from "../hooks/useView"
import { ListItem } from "./ListItem"
import styles from "./ListProducts.module.css"

export const ListProducts = () => {
  const { changeView } = useView()
  return (
    <section className={styles.listProductsContainer}>
      <ListItem onClick={() => changeView("ADD_PRODUCT")}>
        <p>Nuevo elemento</p>
        <PlusIcon />
      </ListItem>
      <ListItem title="Pan"/>
    </section>
  )
}