import React, { ReactNode } from 'react'
import styles from './Sidebar.module.css'

interface Props {
  children?: ReactNode
}

const Sidebar: React.FC<Props> = ( { children } ) => {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}

export default Sidebar