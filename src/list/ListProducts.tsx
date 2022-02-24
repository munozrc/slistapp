import { VIEWS } from '../app/contexts'
import { useView } from '../app/hooks'
import { PlusIcon } from '../components/Icons'

import { ListItem } from './ListItem'
import styles from './ListProducts.module.css'

export const ListProducts = () => {
  const { changeView } = useView()
  return (
    <section className={styles.listProductsContainer}>
      <ListItem onClick={() => changeView(VIEWS.ADD_PRODUCT)}>
        <p>Nuevo elemento</p>
        <PlusIcon />
      </ListItem>
      <ListItem title="Pan"/>
    </section>
  )
}
