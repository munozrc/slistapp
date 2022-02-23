import { useContext } from 'react'

import { UIContext, VIEW } from '../contexts/UIContext'

interface returnType {
  view: VIEW,
  changeView: (value: VIEW) => void
}

export const useView = (): returnType => {
  const { view, setView } = useContext(UIContext)

  const changeView = (value: VIEW) => {
    setView(() => value)
  }

  return {
    view,
    changeView
  }
}
