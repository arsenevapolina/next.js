"use client";

import { useState } from "react";
import { updatePost } from "@/app/api/likesInfo";

const useLike = (postId: number, initialLikes: number) => {
  const [currentLikes, setCurrentLikes] = useState(initialLikes);

  const handleLike = async () => {
    const newLikes = currentLikes + 1;
    setCurrentLikes(newLikes);

    try {
      await updatePost(postId, newLikes);
    } catch (error) {
      console.error("Error updating post:", error);
      setCurrentLikes(currentLikes);
    }
  };

  return { currentLikes, handleLike };
};

export default useLike;
