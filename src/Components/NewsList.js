import './NewsList.css'
import React, { useState } from 'react';

const NewsList = () => {
  const [newsItems] = useState([
    { title: 'GTA 6 has officially been set to release in Fall 2025.', 
    description: 'Rockstar revealed the release window alongside the first trailer in early December. A specific timeframe within 2025 has not been announced.GTA 6 will launch on PS5 and Xbox Series X|S.', 
    image: 'gta6.png' },
    { title: 'Baldur’s Gate 3 receives Best Game of the Year Award', description: 'Baldur’s Gate 3 has taken out a grand total of five BAFTAs at the BAFTA Game Awards 2024, including the top prize for Best Game of the Year. Going into the show, it was one of the most nominated games, alongside Marvel’s Spider-Man 2, Alan Wake 2, and more.',
     image: 'bg.jpg' },

  ]);

  const renderNewsItems = () => {
    return newsItems.map((item, index) => (
      <div key={index} className="news-item">
        <img src={item.image} alt={item.title} className="news-image" />
        <div className="news-details">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="news-list">
      {renderNewsItems()}
    </div>
  );
};

export default NewsList;
