import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'

import { UIContextProvider } from './contexts/UIContext'
import { View } from './components/View'
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
