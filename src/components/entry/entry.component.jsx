import React from 'react';
import './entry.styles.css';


export const Entry = (props) => (
    <div className="card-container">
    <img alt="pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`}/>
        <h1>{props.pokemon.name.english}</h1>
        <p>
        {
            props.pokemon.type.map(type => (
                <p>{type}</p>
            ))
        }
        </p>
    </div>
);