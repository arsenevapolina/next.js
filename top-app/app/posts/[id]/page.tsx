import { fetchPostById } from "@/app/api/fetchPostById";

export default async function getPostPageContent({
  params,
}: {
  params: { id: string };
}) {
  const postId = params.id;

  try {
    const post = await fetchPostById(postId);
    return (
      <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
    );
  } catch (error) {
    console.error(
      "Post page content error: unable to fetch post with id ",
      postId,
      error
    );
  }
}
