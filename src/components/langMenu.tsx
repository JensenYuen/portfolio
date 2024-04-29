import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PublicIcon from '@mui/icons-material/Public'
import i18n from 'i18next'

const LangMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [language, setlanguage] = useState(navigator.language.split('-')[0])
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const changeLang = async (e: any) => {
    let lang = e.target.innerText
    lang === '日本語' ? lang = 'ja' : lang = 'en'

    setlanguage(lang)
    await i18n.changeLanguage(lang).finally(() => {
      language === 'ja' ? setlanguage(lang) : setlanguage(lang)
    })
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PublicIcon fontSize='small' className='ml-1 icon' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ 'aria-labelledby': 'basic-button' }}
      >
        <MenuItem
          onClick={(e) => { changeLang(e).catch(() => null) }}
          disabled={language === 'en'}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={(e) => { changeLang(e).catch(() => null) }}
          disabled={language === 'ja'}
        >
          日本語
        </MenuItem>
      </Menu>
    </div>
  )
}

export default LangMenu
