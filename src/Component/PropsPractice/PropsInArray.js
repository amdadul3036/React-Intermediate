import React from 'react';

const PropsInArray = (props) => {

    function Click(){
        alert("Button is clicked");
    }
    return (
        <div>
            <h2>I love fruits: {props.fruits.join(" , ")} </h2>
            <button onClick = {Click}>Click Me</button>
        </div>
    );
};

export default PropsInArray;

