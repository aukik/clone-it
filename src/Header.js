import React from "react"
import "./Header.css"
import PersonIcon from "@mui/icons-material/Person"
import Button from "react-bootstrap/Button"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import IconButton from "@mui/material/IconButton"
import ForumIcon from "@mui/icons-material/Forum"

function Header() {
  return (
    <div className='header'>
      <IconButton className='icon_button'>
        <PersonIcon fontSize='large' className='Person' />
      </IconButton>

      <img
        className='header_logo'
        src='https://wallpaperaccess.com/full/322057.png'
      />
      <IconButton className='forum_button'>
        <ForumIcon />
      </IconButton>
    </div>
  )
}

export default Header
