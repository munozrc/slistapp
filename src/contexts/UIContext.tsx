import { createContext, Dispatch, FC, SetStateAction, useState } from 'react'

export type VIEW = "HOME" | "ADD_PRODUCT" 

interface UI {
  view: VIEW
  setView: Dispatch<SetStateAction<VIEW>>
}

export const UIContext = createContext({} as UI)

export const UIContextProvider: FC = ({ children }) => {
  const [view, setView] = useState<VIEW>("HOME")
  return (
    <UIContext.Provider value={{ view, setView }}>
      {children}
    </UIContext.Provider>
  )
}
