import { Container } from '@mui/material'
import React from 'react'
import '../../stylesheets/footer.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer>
      <Container maxWidth='sm'>
        <div className="footer pt-5">
          {`© ${year} Jensen Yuen. All Rights Reserved.`}
        </div>
      </Container>
    </footer>
  )
}

export default Footer
