import { StaticPostParams } from "../interfaces/Post";
import { getPosts } from "./getPosts";

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
