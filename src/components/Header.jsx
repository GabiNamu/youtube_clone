import React from 'react';
import '../header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
//es7 snippets 

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img 
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
        alt="Youtube-logo" 
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder='Search' />
        <button className="header__inputButton"><SearchIcon /></button>
      </div>
        <div className="header__icons">
          <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" /> 
          <NotificationsIcon className="header__icon" />
          <Avatar 
          src="https://avatars.githubusercontent.com/u/98360447?s=400&u=13c8902755f45aeca3ba46b530dfcfaf213723de&v=4"
          alt='profile-picture'
          /> 
        </div>
        
    </div>
  )
}

export default Header