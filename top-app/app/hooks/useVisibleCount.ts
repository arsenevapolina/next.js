import { useEffect, useState } from "react";
import { Post } from "../interfaces/Post";

export const useVisibleCount = (posts: Post[], interval: number): number => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (posts.length === 0) return;

    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < posts.length) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, Math.max(interval, 1000));

    return () => clearInterval(timer);
  }, [posts, interval]);

  return visibleCount;
};
