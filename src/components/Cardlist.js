import React from "react";
import Card from "./Card";

const Cardlist=({robot}) => {
    const robotArray = robot.map((user , i) => {
        return ( <Card 
            key={i} 
            id={robot[i].id}
            name={robot[i].name} 
            email={robot[i].email}/>);
    });
    return (
        <div>
        {robotArray}
        </div>
    );
}
 
export default Cardlist