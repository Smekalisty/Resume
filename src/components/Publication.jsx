import React from 'react';

const Publication = (props) => {
    return (
        <div>
            <p />
            <h5>{props.payload.primary}</h5>
            <h5 class='secondaryText'>{props.payload.secondary}</h5>
            <h6 class='secondaryText'>{props.payload.date}</h6>

            <a href={props.payload.link} target="_blank" rel="noreferrer">Open publication</a>
        </div>
    );
};

export default Publication;