import React from 'react'
import classnames from 'classnames'

const AppNavBar = props => {
  const { className } = props

  const navClasses = classnames(
    className,
    'navbar navbar-expand navbar-dark bg-dark'
  )

  return (
    <nav className={navClasses}>
      <a className='navbar-brand' href='#'>HomesInOne.co.uk </a>
      <div className='collapse navbar-collapse' id='navbarsExample02'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Link</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AppNavBar