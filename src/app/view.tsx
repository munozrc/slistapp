import { ReactElement } from 'react'

import { VIEWS } from './contexts'
import { useView } from './hooks'

interface ViewProps {
  view: VIEWS
  component: ReactElement
}

export const View = ({ view, component }: ViewProps) => {
  const { view: activeView } = useView()
  return activeView === view ? component : null
}
