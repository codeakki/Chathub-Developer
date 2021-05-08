import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from './StateProvider';

function Header() {
  const [{user}]=useStateValue();
  return (
    <div className="header">
    <div className="header_left">

        {/* Avatar for Logged in user  */} 
        <Avatar className="header_avatar" alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* Time Icon */}
       <AccessTimeIcon/>

    </div>
    <div className="header_search">
        {/* Search icon */}
        <SearchIcon/>
        <input placeholder="Search Here"/>
    </div>
    <div className="header_right">
      <HelpOutlineIcon/>

    </div>
    </div>
  )
}

export default Header
