import PageContent from "@/app/components/PageContent/PageContent";
import { MOCKS } from "@/app/mocks";

export default function getPostPageContent({
  params,
}: {
  params: { id: string };
}) {
  const postId = parseInt(params.id, 10);
  const post = MOCKS.find((p) => p.id === postId);

  if (!post) {
    console.error("Post not found for id:", postId);
    return null;
  }

  return (
    <>
      <PageContent post={post} />
    </>
  );
}
