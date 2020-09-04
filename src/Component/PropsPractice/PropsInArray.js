import React from 'react';

const PropsInArray = (props) => {
    return (
        <div>
            <h2>I love fruits: {props.fruits.join(", ")} </h2>
        </div>
    );
};

export default PropsInArray;

