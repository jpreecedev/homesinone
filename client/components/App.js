import React from 'react'
import { connect } from 'react-redux'

import AppHeader from './AppHeader'
import AppSideNav from './AppSideNav'

import styles from './App.css'

const App = props => {
  return (
    <div className={styles.container}>
      <AppHeader className={styles.header}>
        <h1>Holy Grail Layout with CSS Grid</h1>
      </AppHeader>
      <AppSideNav className={styles.nav} />
      <main className={styles.main}>
        Main content
      </main>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    prop: store.exampleState.prop
  }
}

export default connect(mapStateToProps)(App)
