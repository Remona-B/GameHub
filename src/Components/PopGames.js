import React, { useState } from 'react';
import './PopGames.css';
import { Link } from 'react-router-dom';

const PopGames = () => {
  const [popularGames] = useState([
    { name: 'Valorant', image: 'valo2.jpg' },
    { name: 'Fortnite',  image: 'valo.jpg' },
    { name: 'Counter Strike', image: 'cs.jpg' },
    { name: 'Call of Duty',  image: 'cod.jpg' },
    { name: 'GTA5', image: 'gta5.jpg' },
    { name: 'DOTA2', image: 'dota2.jpg' },
    { name: 'Minecraft', image: 'mine.jpg' },
    { name: 'Overwatch', image: 'overwatch.jpg' },
  ]);

  const [awardGames] = useState([
    { name: "Baldur's Gate 3", image: 'balder.jpg' },
    { name: 'Spiderman 2', image: 'spider.jpg' },
    { name: 'Alan Wake',  image: 'alan.jpg' },
    { name: 'Last Of Us',  image: 'lastof.jpg' },
    { name: 'Resident Evil 4', image: 'last.jpg' },
    { name: 'Super Mario Bros',  image: 'super.jpg' },
    { name: 'Legend of Zelda',  image: 'zelda.jpg' },
    { name: 'God of War', image: 'god.jpg' },
  ]);

  const [fanGames] = useState([
    { name: 'San Andreas', image: 'san.jpg' },
    { name: 'Detroit', image: 'det.jpg' },
    { name: 'Dark Souls', image: 'dark.jpg' },
    { name: 'Mortal Kombat', image: 'kombat.jpg' },
    { name: 'GTA5', image: 'gta5.jpg' },
    { name: 'Minecraft',  image: 'mine.jpg' },
    { name: 'Spiderman 2', image: 'spider.jpg' },
    { name: 'God of War',  image: 'god.jpg' },
  ]);

  const renderGames = (games) => {
    return games.map((game, index) => (
      <Link key={index} to={`/game/${game.name}`} className='image-link'>
        <div className='image-wrapper'>
          <img src={game.image} alt={game.name} />
          <div className='image-details'>
            <p className="text-lg font-bold text-yellow-500">{game.name}</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <div className='PopGames'>
      <div className='section'>
        <div className='PopGames-title'>Popular Games</div>
        <div className='image-container'>
          {renderGames(popularGames)}
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='section'>
        <div className='PopGames-title'>Award Winning Games</div>
        <div className='image-container'>
          {renderGames(awardGames)}
        </div>
      </div>
      <br/><br/><br/><br/>
      <div className='section'>
        <div className='PopGames-title'>Fan's Favourite Games</div>
        <div className='image-container'>
          {renderGames(fanGames)}
        </div>
      </div>
    </div>
  );
}

export default PopGames;
