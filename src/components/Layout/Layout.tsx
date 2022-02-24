import { ReactNode } from 'react'

import { Button } from '../Button'
import { BackIcon, SettingsIcon } from '../Icons'

import styles from './Layout.module.css'

interface LayoutProps {
  align?: 'start' | 'end'
  title: string
  handleClick?: () => void
  children: ReactNode
}

export const Layout = ({ align = 'end', title, handleClick, children }: LayoutProps) => {
  return (
    <main className={styles.container}>
      <header className={`${styles.header} ${align === 'start' ? styles.start : ''}`}>
        <h2>{title}</h2>
        <Button onClick={handleClick}>
          {align === 'start' ? <BackIcon /> : <SettingsIcon />}
        </Button>
      </header>
      <div className={styles.wrapper}>
        {children}
      </div>
    </main>
  )
}
