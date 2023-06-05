import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  /* const cardArray = robots.map((user,i) => {
        return <Card id={robots[i].id} name={robots[i].name} username ={robots[i].username}/>
    }) */
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={user.id}    /* robots[i].id */
            name={user.name}  /* robots[i].name */
            username={user.username}  /* robots[i].username */
          />
        );
      })}
    </div>
  );
};

export default CardList;
