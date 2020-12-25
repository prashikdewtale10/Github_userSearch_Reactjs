import React from "react";
import Card from "./components/card/card";

// import styles

const CardList = (userData) => {
  return (
    <div className='CardListStyle'>
      {userData.map((user) => (
        <Card key={user.id} profile={user} />
      ))}
    </div>
  );
};

export default CardList;
