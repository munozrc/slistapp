import { VIEWS } from '../../app/contexts'
import { useView } from '../../app/hooks'
import { PlusIcon } from '../../components/Icons'
import { useProduct } from '../hooks'

import styles from './ListProducts.module.css'

export const ListProducts = () => {
  const { changeView } = useView()
  const { products } = useProduct()
  return (
    <section className={styles.listProductsContainer}>
      <button className={styles.listItemContainer} onClick={() => changeView(VIEWS.ADD_PRODUCT)}>
        <p>Nuevo elemento</p>
        <PlusIcon />
      </button>
      {
        products.map(({ id, name }) => (
          <button key={id} className={styles.listItemContainer}>
            <h4>{name}</h4>
          </button>
        ))
      }
    </section>
  )
}
