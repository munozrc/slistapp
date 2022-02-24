import { Layout } from '../components/Layout'
import { ListProducts } from '../product/components/ListProducts'

export const HomeView = () => {
  return (
    <Layout title="Inicio">
      <ListProducts />
    </Layout>
  )
}
