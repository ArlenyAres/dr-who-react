
import React from 'react';

import styles from './page.module.css'
import Carrousel from './components/Carrousel/Carrousel'

export default function Home() {
  return (
    <main className={styles.main}>
      <Carrousel/>
    </main>
  )
}
