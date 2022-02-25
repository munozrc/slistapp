import { VIEWS } from '../app/contexts'
import { useView } from '../app/hooks'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'
import { Layout } from '../components/Layout'

export const AddProductView = () => {
  const { changeView } = useView()
  return (
    <Layout align="start" title="Agregar producto" handleClick={() => changeView(VIEWS.HOME)}>
      <form onSubmit={() => {}}>
        <InputField type="text" placeholder="Nombre" name="name" />
        <InputField type="number" placeholder="Precio" name="price" />
        <div style={{ marginTop: '20px' }}>
          <Button variant='primary'>Agregar</Button>
        </div>
      </form>
    </Layout>
  )
}
