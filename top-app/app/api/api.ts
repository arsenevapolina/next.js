import { PostContent, StaticPostParams } from "../interfaces/Post";
import { getPosts } from "./getPosts";

export async function fetchPostById(postId: string): Promise<PostContent> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch post with id: ${postId}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch post error: unable to retrieve post data.", error);
    throw error;
  }
}

export async function generateStaticParams(): Promise<StaticPostParams[]> {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({ id: post.id.toString() }));
  } catch (error) {
    console.error(
      "Static params generation error: unable to fetch posts data.",
      error
    );
    return [];
  }
}
