import { VIEWS } from '../app/contexts'
import { useView } from '../app/hooks'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import { Layout } from '../components/Layout'
import { useProduct } from '../product/hooks'

export const AddProductView = () => {
  const { changeView } = useView()
  const { addProduct } = useProduct()
  return (
    <Layout align="start" title="Agregar producto" handleClick={() => changeView(VIEWS.HOME)}>
      <form onSubmit={addProduct}>
        <InputField type="text" placeholder="Nombre" name="name" />
        <InputField type="number" placeholder="Precio" name="price" />
        <div style={{ marginTop: '20px' }}>
          <Button variant='primary'>Agregar</Button>
        </div>
      </form>
    </Layout>
  )
}
