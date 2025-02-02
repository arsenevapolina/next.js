export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  postId: number;
}

export interface PostContent {
  id: number;
  title: string;
  body: string;
}

export interface StaticPostParams {
  id: string;
}
