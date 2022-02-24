import { ReactNode } from 'react'

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
      </header>
      <div className={styles.wrapper}>
        {children}
      </div>
    </main>
  )
}
