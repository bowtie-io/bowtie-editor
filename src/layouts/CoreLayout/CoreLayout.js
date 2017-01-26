import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.sass'
import '../../styles/core.sass'

export const CoreLayout = ({ children }) => (
  <div>
  <Header />
    <div className='main'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
