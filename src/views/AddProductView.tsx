import { VIEWS } from '../app/contexts'
import { useView } from '../app/hooks'
import { Layout } from '../components/Layout'

export const AddProductView = () => {
  const { changeView } = useView()
  return (
    <Layout align='start' title="Agregar producto" handleClick={() => changeView(VIEWS.HOME)}>
      <h4>nombre</h4>
    </Layout>
  )
}
