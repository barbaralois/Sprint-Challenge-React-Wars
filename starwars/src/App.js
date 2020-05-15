import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import { Button } from './styled-components';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [pokemon, setPokemon] = useState([]);
  const [previous, setPrevious] = useState('');
  const [next, setNext] = useState('');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokemon(res.data.results);
      setPrevious(res.data.previous);
      setNext(res.data.next);
    });
  }, []);

  const getPrevious = (event) => {
    event.preventDefault();
    axios.get(previous).then((res) => {
      setPokemon(res.data.results);
      setPrevious(res.data.previous);
      setNext(res.data.next);
    });
  };

  const getNext = (event) => {
    event.preventDefault();
    axios.get(next).then((res) => {
      setPokemon(res.data.results);
      setPrevious(res.data.previous);
      setNext(res.data.next);
    });
  };

  const getPokemonID = (url) => {
    let end = url.substring(url.length - 4);
    let theID = end.replace(/\D/g, '');
    return theID;
  };

  return (
    <div className="App">
      <h1 className="Header">Pokemon</h1>
      <div className="container">
        {pokemon.map((mon) => {
          return (
            <Character
              name={mon.name}
              key={getPokemonID(mon.url)}
              id={getPokemonID(mon.url)}
            />
          );
        })}
      </div>
      <Button onClick={getPrevious}>Previous</Button>
      <Button onClick={getNext}>Next</Button>
    </div>
  );
};

export default App;
