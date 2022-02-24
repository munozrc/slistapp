import { ReactNode } from 'react'

import { Button } from '../Button'
import { SettingsIcon } from '../Icons'

import styles from './Layout.module.css'

interface LayoutProps {
  title: string
  children: ReactNode
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <Button>
          <SettingsIcon />
        </Button>
      </header>
      <div className={styles.wrapper}>
        {children}
      </div>
    </main>
  )
}
