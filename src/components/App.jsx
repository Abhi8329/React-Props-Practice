import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        post={contacts[0].post}
        img={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        post={contacts[1].post}
        img={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        post={contacts[2].post}
        img={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        post={contacts[3].post}
        img={contacts[3].imgURL}
        phone={contacts[3].phone}
        email={contacts[3].email}
      />
      <Card
        name={contacts[4].name}
        post={contacts[4].post}
        img={contacts[4].imgURL}
        phone={contacts[4].phone}
        email={contacts[4].email}
      />
    </div>
  );
}

export default App;
