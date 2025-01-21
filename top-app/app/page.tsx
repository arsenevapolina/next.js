"use client";

import React, { JSX } from "react";
import { Card } from "./components/Card/Card";
import { cardContent } from "../interfaces/Card.types";
import LikeButton from "./components/LikeButton/LikeButton";
import axios from "axios";

export default function Home(): JSX.Element {
  const updatePost = async (id: string) => {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title: "updated",
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      console.log("Successful request", response.data);
    } catch (error) {
      console.log("An error occurred during the request:", error);
    }
  };

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
      <br />
      <LikeButton onChange={() => updatePost("1")} />
    </>
  );
}
