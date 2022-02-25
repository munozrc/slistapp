import { FormEvent, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ProductContext } from './contexts'
import { Product } from './types'

interface returnType {
  products: Product[],
  addProduct: (event: FormEvent<HTMLFormElement>) => void
}

export const useProduct = (): returnType => {
  const { products, setProducts } = useContext(ProductContext)

  const addProduct = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      name: { value: string };
      price: { value: string };
    }

    const name = target.name.value.trim()
    const price = +target.price.value.trim()

    if (name === '' || price === 0) return

    const product = {
      id: uuidv4(),
      name,
      price,
      units: 1
    }

    setProducts(prev => prev.concat(product))

    target.name.value = ''
    target.price.value = ''
  }

  return { products, addProduct }
}
