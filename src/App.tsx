import { Header } from "./header"
import { useView } from "./hooks/useView"
import { ListProducts } from "./listProducts"
import { Product } from "./product"

export const App = () => {
  const { view } = useView()
  return (
    <div>
      <Header />
      { view === "HOME" && <ListProducts />}
      { view === "ADD_PRODUCT" && <Product />}
    </div>
  )
}
