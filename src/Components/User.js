import React, { useState, useEffect } from "react";

function User(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer");
            
        }, 1000);

      
        return () => clearInterval(timer);
    }, []); 

    return (
        <div>
            <h1>{count}</h1>
            <h1>Name: {props.name} Naja Jaleel</h1>
            <h3>Place: Melbourne</h3>
            <h3>Contact: @naja.jaleel</h3>
        </div>
    );
}

export default User;
