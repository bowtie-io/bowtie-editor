import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.sass'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
  <Header />
  <div className='coreLayout container text-center'>
    <div className='main'>
      {children}
    </div>
  </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
