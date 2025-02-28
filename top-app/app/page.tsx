"use client";
import { Card } from "./components/Card/Card";
import { useFetchPosts } from "./hooks/useFetchPosts";
import { useVisibleCount } from "./hooks/useVisibleCount";
import styles from "./page.module.css";

export default function Home() {
  const { posts } = useFetchPosts(6);
  const visibleCount = useVisibleCount(posts, 800);

  return (
    <main>
      <div className={styles["card-list"]}>
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`${styles.card} ${
              index < visibleCount ? styles.visible : ""
            }`}
          >
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
