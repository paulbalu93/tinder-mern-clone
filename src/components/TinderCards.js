import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
function TinderCards() {
  const [person, setPerson] = useState([
    {
      name: "Sony Skariah",
      url: "https://media-exp1.licdn.com/dms/image/C4D03AQF1du9Uk-xknw/profile-displayphoto-shrink_200_200/0/1598563302645?e=1630540800&v=beta&t=XO4OZPUGKbv_5sp0JJ_1sF3NZ3qBOw1Dq8J1gF6U3M8",
    },
    {
      name: "elon musk",
      url: "https://www.zdf.de/assets/teletext-dpa-image-tesla-chef-elon-musk-archivbild-110~2400x1350?cb=1610042606331",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + "Left the screen");
  };
  return (
    <div>
      <div className="tinderCards">
        <div className="tinderCards__cardContainer">
          {person.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3> {person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TinderCards;
