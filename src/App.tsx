import { Header } from "./header"
import { useView } from "./hooks/useView"
import { ListProducts } from "./ListProducts"

export const App = () => {
  const { view } = useView()
  return (
    <div>
      <Header />
      { view === "HOME" && <ListProducts />}
    </div>
  )
}
