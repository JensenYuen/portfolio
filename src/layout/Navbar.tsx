import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.scss'

const NavBar = () => {
  const links = ['Jensen Yuen', 'Works', 'About']

  const renderLinks = () => {
    const link = links.map((link: string) => {
      return (
        <li key={link}>
          <Link to={`/${link}`}>{link.toUpperCase()}</Link>
        </li>
      )
    })

    return link
  }

  return (
    <nav>
      <Container maxWidth='lg' className='navbar'>
        {renderLinks()}
      </Container>
    </nav>
  )
}

export default NavBar
