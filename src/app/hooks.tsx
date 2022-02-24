import { useContext } from 'react'

import { UIContext, VIEWS } from './contexts'

interface returnType {
  view: VIEWS,
  changeView: (value: VIEWS) => void
}

export const useView = (): returnType => {
  const { view, setView } = useContext(UIContext)

  const changeView = (value: VIEWS) => {
    setView(() => value)
  }

  return { view, changeView }
}
