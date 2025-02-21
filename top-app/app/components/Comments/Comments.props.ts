export interface Comment {
  id: number;
  name: string;
  email: string;
  text: string;
}

export interface CommentsProps {
  postId: number;
}
