import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      {`© ${year} Jensen Yuen. All Rights Reserved.`}
    </div>
  )
}

export default Footer
