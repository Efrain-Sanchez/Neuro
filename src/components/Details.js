import React from 'react';
import db from './db'

function Details (props) {
    const data = db;
    console.log(data);
    const id = window.location.pathname.split('/')[1];
    console.log(id);
    const nerve = data[id];
    console.log(nerve);

    return(
        <div className="div">
            <h1><strong>{nerve.name}</strong></h1>
            <h2>Cranial Nerve: <strong>{nerve.number}</strong></h2>
            <h2>Type: <strong>{nerve.type}</strong></h2>
            <h2>Functioqn: <strong>{nerve.function}</strong></h2>
            <h2>Origin: <strong>{nerve.origin}</strong></h2>
        </div>
    )
}
export default Details;