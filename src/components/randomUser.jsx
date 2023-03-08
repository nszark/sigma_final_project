import React, { useState, useEffect } from 'react';

const RandomUser = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      setPeople(data.results);
    };
    fetchPeople();
  }, []);

  return (
    <div className="randomUser">
      <div className="randomUser__header"> Our Team:</div>
      <div className="randomUser__team">
      {people.map((person) => (
        <div key={person.login.uuid} style={{ display: "inline-block", margin: "10px" }}>
          <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
          <p>{`${person.name.first} ${person.name.last}`}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RandomUser;