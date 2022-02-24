import { VIEWS } from '../../app/contexts'
import { useView } from '../../app/hooks'
import { PlusIcon } from '../../components/Icons'

import styles from './ListProducts.module.css'

export const ListProducts = () => {
  const { changeView } = useView()
  return (
    <section className={styles.listProductsContainer}>
      <button className={styles.listItemContainer} onClick={() => changeView(VIEWS.ADD_PRODUCT)}>
        <p>Nuevo elemento</p>
        <PlusIcon />
      </button>
      <button className={styles.listItemContainer}>
        <h4>Pan</h4>
      </button>
    </section>
  )
}
