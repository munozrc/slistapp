import { Button } from "../components/Button"
import { BackIcon, SettingsIcon } from "../components/Icons"
import { useView } from "../hooks/useView"
import styles from "./Header.module.css"

export const Header = () => {
  const { view } = useView()
  return (
    <header className={styles.headerContainer}>
      { view !== "HOME" && (
        <Button>
          <BackIcon />
        </Button>
      )}
      <h2 className={styles.title}>Inicio</h2>
      <Button>
        <SettingsIcon />
      </Button>
    </header>
  )
}