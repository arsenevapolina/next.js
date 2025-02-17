export interface Post {
  h1: string;
  img: string;
  text: string;
  h2: string;
  p: string;
  id: number;
  likes?: number;
}

export interface PageContentProps {
  post: Post;
}
