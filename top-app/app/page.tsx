import { getPosts } from "@/app/api/getPosts";
import { Card } from "./components/Card/Card";
import { Post } from "./interfaces/Post";
import styles from "./page.module.css";

export default async function Home() {
  let posts: Post[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  const limitedPosts = posts.slice(0, 9);

  return (
    <main>
      <div className={styles["card-list"]}>
        {limitedPosts.map((post) => (
          <div key={post.id}>
            <Card
              img="/card.png"
              title={post.title}
              text={post.body}
              time={3}
              likes={0}
              postId={post.id}
            />
            <br />
          </div>
        ))}
      </div>
    </main>
  );
}
