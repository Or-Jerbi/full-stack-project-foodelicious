import React from 'react'
import { Link } from 'react-router-dom'
import styles  from '../../styles/App.module.css'

function Navbar() {
  return (
    <nav>
        <Link to="/"><img src="/project-logo.png" alt="Logo" className={styles.appLogo}/></Link>
    </nav>
  )
}

export default Navbar