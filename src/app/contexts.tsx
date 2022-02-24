import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

export enum VIEWS {
  HOME = 'HOME',
  ADD_PRODUCT = 'ADD_PRODUCT'
}

interface UI {
  view: VIEWS
  setView: Dispatch<SetStateAction<VIEWS>>
}

export const UIContext = createContext({} as UI)

export const UIContextProvider: FC = ({ children }) => {
  const [view, setView] = useState<VIEWS>(VIEWS.HOME)
  return (
    <UIContext.Provider value={{ view, setView }}>
      {children}
    </UIContext.Provider>
  )
}
