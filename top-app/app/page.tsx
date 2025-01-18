import React, { JSX } from "react";
import { Card } from "./components/Card/Card";
import { cardContent } from "../interfaces/Card.types";
export default function Home(): JSX.Element {
  return (
    <>
      {cardContent.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          text={card.text}
          time={card.time}
          likes={card.likes}
        />
      ))}
    </>
  );
}
