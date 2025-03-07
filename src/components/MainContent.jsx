import React from "react";
import "./maincontent.css";

const MainContent = () => {
  const videos = new Array(20).fill({
    title: "Video Title - Description of the video",
    thumbnail:
      "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
  });

  return (
    <div className="main-content-grid">
      {videos.map((video, index) => (
        <div className="video-card" key={index}>
          <div className="thumbnail-container">
            <img src={video.thumbnail} alt={`Video ${index + 1}`} />
          </div>
          <h3>{video.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MainContent;
