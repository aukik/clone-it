import React from "react"
import "./Header.css"
import PersonIcon from "@mui/icons-material/Person"
import Button from "react-bootstrap/Button"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import IconButton from "@mui/material/IconButton"
function Header() {
  return (
    <div className='header'>
      <div>
        <IconButton className='icon_button'>
          <PersonIcon fontSize='large' className='Person' />
        </IconButton>

        <img
          className='header_logo'
          src='https://wallpaperaccess.com/full/322057.png'
        />
      </div>
    </div>
  )
}

export default Header
