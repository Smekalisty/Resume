import React from 'react';

const Hobby = (props) => {
    return (
        <div>
            <h3>Hobbies</h3>
            <h5 class='secondaryText'>{props.payload.value}</h5>

            <p />
        </div>
    );
};

export default Hobby;