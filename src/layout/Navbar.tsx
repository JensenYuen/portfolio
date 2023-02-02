import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.scss'
import '../stylesheets/global.scss'

interface linkInfo {
  text: string
  link: string
}

const NavBar = () => {
  const links = [
    { text: 'Jensen Yuen', link: 'portfolio' },
    { text: 'Works', link: 'works' },
    { text: 'About', link: 'about' },
    { text: 'Source', link: 'https://github.com/JensenYuen/portfolio' }
  ]

  const renderLinks = () => {
    const link = links.map((link: linkInfo, index) => {
      return (
        <li key={link.link}>
          {index !== 3
            ? (<Link
                className={`pr-2 ${index === 0 ? 'home' : ''}`}
                to={`/${link.link}`}>
                  {link.text}
            </Link>)
            : (
                <a href={link.link} target="_blank" rel="noreferrer">{link.text}</a>
              )
          }
        </li>
      )
    })

    return link
  }

  return (
    <nav>
      <Container maxWidth='sm'>
        <div className="navbar">
          {renderLinks()}
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
