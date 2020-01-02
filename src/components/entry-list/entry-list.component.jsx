import React from 'react';
import {Entry} from '../entry/entry.component.jsx';
import './entry-list.styles.css';

export const EntryList = props => (
    <div className="card-list">
    {
        props.pokemon.slice(0, 19).map(pokemon => (
            <Entry key={pokemon.id} pokemon={pokemon} />
        ))
    }
    </div>
);


