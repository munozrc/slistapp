import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'

import { UIContextProvider, VIEWS } from './app/contexts'
import { View } from './components'
import { ListProducts } from './list'
import { Product } from './product'

import './main.css'

ReactDOM.render(
  <UIContextProvider>
    <View view={VIEWS.HOME} component={<ListProducts />}/>
    <View view={VIEWS.ADD_PRODUCT} component={<Product />}/>
  </UIContextProvider>,
  document.getElementById('root')
)

registerSW()
