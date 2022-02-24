import { ReactElement } from 'react'

import { useView } from './hooks'

interface ViewProps {
  view: string
  component: ReactElement
}

export const View = ({ view, component }: ViewProps) => {
  const { view: activeView } = useView()
  return activeView === view ? component : null
}
