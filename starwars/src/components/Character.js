// Write your Character component here
import React from 'react';
import { CharacterBlock } from '../styled-components';

export default function Character(props) {
  return (
    <CharacterBlock>
      <img
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
          props.id +
          '.png'
        }
        alt={'A sprite of the Pokemon' + props.name}
      />
      <h2>{props.name}</h2>
    </CharacterBlock>
  );
}
