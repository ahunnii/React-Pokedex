import React from 'react';
import './entry-list.styles.css';

export const EntryList = (props) => {
    return <div className="card-list">{props.children}</div>;
};