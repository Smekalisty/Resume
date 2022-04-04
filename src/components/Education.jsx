import React from 'react';

const Education = (props) => {
    return (
        <div>
            <p />
            <h5>{props.payload.primary}</h5>
            <h5 class='secondaryText'>{props.payload.secondary}</h5>
            <h6 class='secondaryText'>{props.payload.years}</h6>
        </div>
    );
};

export default Education;