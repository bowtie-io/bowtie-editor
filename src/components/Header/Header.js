import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.sass'

export const Header = () => (
  <div className="sidebar">
    <h1>Bowtie.io</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Projects
    </IndexLink>
    <hr />
    <Link to='/project' activeClassName='route--active'>
    Project
    </Link>
    <hr />
    <Link to='/editor' activeClassName='route--active'>
    Editor
    </Link>
  </div>
)

export default Header
