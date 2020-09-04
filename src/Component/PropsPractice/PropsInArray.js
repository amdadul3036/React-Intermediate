import React from 'react';

const PropsInArray = (props) => {

    function Click(){
        alert("Button is clicked");
    }
    return (
        <div>
            <button onClick = {Click()}>Click Me</button>
        </div>
    );
};

export default PropsInArray;

