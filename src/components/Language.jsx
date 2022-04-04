import React from 'react';

const Language = (props) => {
    return (
        <div>
            <h3>Languages</h3>
            <h5 class='secondaryText'>{props.payload.value}</h5>
        </div>
    );
};

export default Language;