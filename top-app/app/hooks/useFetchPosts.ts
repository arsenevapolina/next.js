import { useEffect, useState } from "react";
import { getPosts } from "@/app/api/getPosts";
import { Post } from "../interfaces/Post";

export const useFetchPosts = (limit: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const fetchedPosts = (await getPosts()) as Post[];
        setPosts(fetchedPosts.slice(0, limit));
      } catch (error: unknown) {
        console.error("Ошибка при получении постов:", error);
        setError("Не удалось загрузить посты");
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, error };
};
