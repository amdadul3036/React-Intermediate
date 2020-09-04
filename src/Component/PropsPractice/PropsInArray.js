import React from 'react';

const PropsInArray = (props) => {

    function Click(a){
        alert(a);
    }
    return (
        <div>
            <button onClick = {Click.bind(this,"I am Pada Chagol")}>Click Me</button>
        </div>
    );
};

export default PropsInArray;

