import { PostContent } from "../interfaces/Post";

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