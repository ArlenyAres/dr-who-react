//page.jxs 
'use client'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


library.add(faSearch);


import styles from './page.module.css'
import Carrousel from './components/Carrousel/Carrousel'

export default function Page() {
  return (
    <main className={styles.main}>
      <Carrousel/>
    </main>
  )
}
