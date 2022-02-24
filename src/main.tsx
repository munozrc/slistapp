import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'

import { UIContextProvider } from './app/contexts'
import { View } from './app/components'
import { ListProducts } from './list'
import { Product } from './product'

import './main.css'

ReactDOM.render(
  <UIContextProvider>
    <View view='HOME' component={<ListProducts />}/>
    <View view='ADD_PRODUCT' component={<Product />}/>
  </UIContextProvider>,
  document.getElementById('root')
)

registerSW()
