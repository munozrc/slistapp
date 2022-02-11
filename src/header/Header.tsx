import { Button } from "../components/Button"
import { BackIcon, SettingsIcon } from "../components/Icons"
import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Button>
        <BackIcon />
      </Button>
      <h2 className={styles.title}>Inicio</h2>
      <Button>
        <SettingsIcon />
      </Button>
    </header>
  )
}