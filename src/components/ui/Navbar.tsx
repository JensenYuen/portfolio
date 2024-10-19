import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Drawer, List, ListItem, ListItemButton } from '@mui/material'
import { NAV_LINKS } from '../../constants'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import LangMenu from '../langMenu'
import '../../stylesheets/navbar.scss'

interface LinkInfo {
  text: string
  link: string
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [winSize, setWinSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const windowSize = window.innerWidth
      if (windowSize < 720) {
        setWinSize(windowSize)
        setIsMobile(true)
      } else {
        setWinSize(windowSize)
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
  }, [winSize])

  const renderLinks = () => {
    const link = NAV_LINKS.map((link: LinkInfo, index: number) => {
      if (index === 0) {
        return <></>
      }

      return (
        <>
          {index !== 3
            ? (<Link className='pr-2' to={`${link.link}`} state={{ workSelected: false }}>{link.text}</Link>)
            : (
                <div className='d-flex'>
                  <a href={link.link} target='_blank' rel='noreferrer'>{link.text}</a>
                  <GitHubIcon fontSize='small' className='ml-1 icon' />
                </div>
              )
          }
        </>
      )
    })

    return link
  }

  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if ((event.type === 'keydown') &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Escape')
      ) {
        return
      }
      setIsOpen(open)
    }

  const renderList = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NAV_LINKS.map((link: LinkInfo, index) => {
          if (index === 0) {
            return (
              <ListItem key={`${link.text}-mobile`} disablePadding>
                <ListItemButton>
                  <Link to='/'>Home</Link>
                </ListItemButton>
              </ListItem>
            )
          }
          if (index !== 3) {
            return (
              <ListItem key={`${link.text}-mobile`} disablePadding>
                <ListItemButton>
                  <Link to={`/${link.link}`} state={{ workSelected: false }}>{link.text}</Link>
                </ListItemButton>
              </ListItem>
            )
          } else {
            return (
              <ListItem key={`${link.text}-mobile`} disablePadding>
                <ListItemButton>
                  <a href={link.link} target='_blank' rel='noreferrer'>{link.text}</a>
                  <GitHubIcon fontSize='small' className='ml-1 font-black' />
                </ListItemButton>
              </ListItem>
            )
          }
        })}
      </List>
    </Box>
  )

  return (
    <nav>
      <Container maxWidth='md' className='pt-2 pb-5'>
        <div className={`d-flex align-center ${isMobile ? 'jc-sb' : 'jc-sa'}`}>
          <div className='d-flex'>
            <Link key='home' className='pr-2 home' to='/'>{NAV_LINKS[0].text}</Link>
            {!isMobile &&
              <div className="navbar">
                {renderLinks()}
              </div>
            }
          </div>
          <div className='d-flex'>
            {LangMenu()}
            {isMobile &&
              <div className="sidebar">
                <Button onClick={toggleDrawer(true)}
                  startIcon={<MenuIcon />} style={{ color: '#7e27b3' }} />
                <Drawer
                  anchor={'right'}
                  open={isOpen}
                  onClose={toggleDrawer(false)}
                >
                  {renderList()}
                </Drawer>
              </div>
            }
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar
