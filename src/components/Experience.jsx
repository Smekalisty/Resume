import React from 'react';

const Experience = (props) => {
    return (
        <div>
            <div class='d-flex mb-3 align-items-center'>
                <div class='flex-shrink-0'>
                    <img src={props.payload.image} alt='company logo' />
                </div>
                <div class='flex-grow-1 ms-3'>
                    <h6>{props.payload.position}</h6>
                    <h6>{props.payload.company}</h6>
                    <h6>{props.payload.date}</h6>
                </div>
            </div>
            
            <div style={{"white-space": "pre-wrap"}}>{props.payload.experience}</div>
        </div>
    );
};

export default Experience;