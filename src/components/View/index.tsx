import { ReactElement } from 'react'

import { VIEWS } from '../../app/contexts'
import { useView } from '../../app/hooks'

interface ViewProps {
  view: VIEWS
  component: ReactElement
}

export const View = ({ view, component }: ViewProps) => {
  const { view: activeView } = useView()
  return activeView === view ? component : null
}
