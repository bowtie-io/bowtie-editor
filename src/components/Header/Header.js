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
    <Link to='/dashboard' activeClassName='route--active'>
      Dashboard
    </Link>
  </div>
)

export default Header
