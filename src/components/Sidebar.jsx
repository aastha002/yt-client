import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SchoolIcon from "@mui/icons-material/School";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DownloadIcon from "@mui/icons-material/Download";
import MovieIcon from "@mui/icons-material/Movie";

const Sidebar = ({ isOpen, onMenuClick }) => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "Shorts", icon: <MovieIcon /> },
    { text: "Subscriptions", icon: <SubscriptionsIcon /> },
    { text: "History", icon: <HistoryIcon /> },
    { text: "Playlists", icon: <PlaylistPlayIcon /> },
    { text: "Your Videos", icon: <VideoLibraryIcon /> },
    { text: "Your Courses", icon: <SchoolIcon /> },
    { text: "Watch Later", icon: <WatchLaterIcon /> },
    { text: "Liked Videos", icon: <ThumbUpIcon /> },
    { text: "Downloads", icon: <DownloadIcon /> },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={onMenuClick}>
            {item.icon} {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
