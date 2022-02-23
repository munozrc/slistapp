import { Button } from '../components/Button'
import { BackIcon, SettingsIcon } from '../components/Icons'
import { useView } from '../hooks/useView'

import styles from './Header.module.css'

export const Header = () => {
  const { view, changeView } = useView()
  return (
    <header className={styles.headerContainer}>
      { view !== 'HOME' && (
        <Button onClick={() => changeView('HOME')}>
          <BackIcon />
        </Button>
      )}
      <h2 className={styles.title}>
        {view === 'HOME' && 'Inicio'}
        {view === 'ADD_PRODUCT' && 'Nuevo producto'}
      </h2>
      <Button>
        <SettingsIcon />
      </Button>
    </header>
  )
}
