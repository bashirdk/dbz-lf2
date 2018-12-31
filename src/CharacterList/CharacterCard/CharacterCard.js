import "./CharacterCard.css";

import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ character }) => (
  <Link to={`/characters/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}`}>
    <div className="character-card inline-block border mx-4 my-4 w-48 rounded overflow-hidden">
      <img 
        src={require(`../../images/face/${character.saga.toLowerCase()}/${character.url_id.toLowerCase()}.png`)}
        alt={`face pic of ${character.name}`}
        className="w-full"
      />
      <div class="text-center text-sm mx-1 my-2">
      {character.name}
      </div>      
    </div>
    
  </Link>
);

export default CharacterCard;
