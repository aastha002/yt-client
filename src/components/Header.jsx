import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = ({ onMenuClick }) => {
  return (
    <header className="header">
      <div className="header-left">
        <MenuIcon className="icon" onClick={onMenuClick} />
        <div className="logo">
          <YouTubeIcon className="youtube-icon" />
          <span>YouTube</span>
        </div>
      </div>
      <div className="header-center">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="mic-icon">
          <MicIcon className="icon" />
        </div>
      </div>
      <div className="header-right">
        <button className="create-button">
          <AddIcon className="icon" />
          <span>Create</span>
        </button>
        <NotificationsIcon className="icon" />
        <AccountCircleIcon className="icon" />
      </div>
    </header>
  );
};

export default Header;
