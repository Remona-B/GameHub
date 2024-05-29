import React from 'react';
import { useParams } from 'react-router-dom';
import './GameDetails.css';

const GameDetails = () => {
  const { name } = useParams();
  const gameData = {
    'Valorant': {
      trailer: 'https://www.youtube.com/embed/IhhjcB2ZjIM?si=LCX4VVPajrSS2-sy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      releaseDate: 'June 2, 2020',
      developer: 'Riot Games',
      description: 'Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020. The development of the game started in 2014.',
      platforms:'Windows',
      gameSite:'https://playvalorant.com/'
    },
    'Fortnite': {
      trailer: 'https://www.youtube.com/embed/6Mtfo8asqjM?si=I3hRNhbN4KfUJJOn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      releaseDate: 'July 21, 2017',
      developer: 'Epic Games',
      description:'Fortnite is an online video game and game platform developed by Epic Games and released in 2017. It is available in six distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite Battle Royale, a free-to-play battle royale game in which up to 100 players fight to be the last person standing',
      platforms:'S4, PS5, Xbox One, Xbox Series X|S, Nintendo Switch, Windows, and Android platforms',
      gameSite:'https://www.fortnite.com/?lang=en-US'
    },
    'GTA5':{
      trailer:'https://www.youtube.com/embed/N-xHcvug3WI?si=xf_BJFoeIBg2PYiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      releaseDate:'17 September 2013',
      developer:'Rockstar North',
      description:' Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa (Ned Luke), street gangster Franklin Clinton (Shawn Fonteno), and drug dealer and gunrunner Trevor Philips (Steven Ogg), and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. Players freely roam San Andreass open world countryside and fictional city of Los Santos, based on Los Angeles',
      platforms:'PS3,PS4,PS5,XBOX 1, XBOX 360, XBOX Series X/S, Windows',
      gameSite:'https://store.rockstargames.com/game/buy-gta-v'
    }
  };

  const game = gameData[name];

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="game-details-container">
      <div className="game-details-header">
        <h1>{name}</h1>
      </div>
      <div className="game-details-content">
        <div className="game-details-trailer">
          <p><strong>Trailer:</strong></p>
          <iframe src={game.trailer} title={name} allowFullScreen></iframe>
        </div>
        <div className="game-details-info">
          <p><strong>Release Date:</strong> {game.releaseDate}</p>
          <p><strong>Developer:</strong> {game.developer}</p>
          <p><strong>Official Webstide:</strong>{game.gameSite}</p>
          <p><strong>Platforms:</strong>{game.platforms}</p>
          <p><strong>Description</strong>{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;


