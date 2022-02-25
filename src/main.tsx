import ReactDOM from 'react-dom'
import { registerSW } from 'virtual:pwa-register'

import { UIContextProvider, VIEWS } from './app/contexts'
import { ProductContextProvider } from './product/contexts'
import { View } from './app/view'
import { AddProductView, HomeView } from './views'

import './main.css'

ReactDOM.render(
  <UIContextProvider>
    <ProductContextProvider>
      <View view={VIEWS.HOME} component={<HomeView />}/>
      <View view={VIEWS.ADD_PRODUCT} component={<AddProductView />}/>
    </ProductContextProvider>
  </UIContextProvider>,
  document.getElementById('root')
)

registerSW()
