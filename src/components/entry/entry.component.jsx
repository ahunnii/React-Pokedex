import React from 'react';
import './entry.styles.css';


export const Entry = (props) => (
    <div className="card-container">
    <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}/>
        <h1>{props.pokemon.name.english}</h1>
     
        {
            props.pokemon.type.map(type => (
                <p key={[props.pokemon.id, type].join()} >{type}</p>
            ))
        }
  
    </div>
);