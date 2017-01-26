import React from 'react'
import { Link } from 'react-router'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="container">
    <div className="row">
      <div className="col">
        <img src="http://placehold.it/220x80" />
        <div className="card card-block">
          <Link to='/project'>
            Project
          </Link>
        </div>
      </div>
      <div className="col">
        <img src="http://placehold.it/220x80" />
        <div className="card card-block">
          <Link to='/project'>
            Project
          </Link>
        </div>
      </div>
      <div className="col">
      <div className="card">
        <img src="http://placehold.it/220x80" />
        <div className="card-block">
          <Link to='/project'>
            Project
          </Link>
        </div>
      </div>
      </div>
      <div className="w-100" />
    </div>

  </div>
)

export default HomeView
