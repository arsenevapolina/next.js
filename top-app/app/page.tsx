"use client";

import React, { JSX, useState } from "react";
import { Card } from "./components/Card/Card";
import { cardContent } from "../interfaces/Card.types";
import LikeButton from "./components/LikeButton/LikeButton";
import axios from "axios";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  const [posts, setPosts] = useState(cardContent);

  const updatePost = async (id: string, currentLikes: number) => {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          likes: currentLikes + 1,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      setPosts(
        posts.map((post) =>
          post.id === parseInt(id) ? { ...post, likes: post.likes + 1 } : post
        )
      );

      console.log("Successful request", response.data);
    } catch (error) {
      console.log("An error occurred during the request:", error);
    }
  };

  return (
    <div className={styles["card-list"]}>
      {posts.map((card) => (
        <div key={card.id}>
          <Card
            img={card.img}
            title={card.title}
            text={card.text}
            time={card.time}
            likes={card.likes}
          />
          <br />
          <LikeButton
            onChange={() => updatePost(card.id.toString(), card.likes)}
          />
        </div>
      ))}
    </div>
  );
}
