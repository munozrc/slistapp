import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

import { Product } from './types'

interface IProduct {
  products: Product[]
  setProducts: Dispatch<SetStateAction<Product[]>>
}

export const ProductContext = createContext({} as IProduct)

export const ProductContextProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
