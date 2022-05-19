import React from 'react'
import { useState } from 'react'
import './header.css'
import '../style/style.css'

const Header = () => {

  return (
    <>

      <nav id="container" role="navigation">
          <h1 className="name-title">Table Component</h1>
          <div className="header-links">
            <ul>
              <li data-menuanchor="fourthPage">Home</li>
            </ul>
          </div>
      </nav>

    </>
  )
}

export default Header
