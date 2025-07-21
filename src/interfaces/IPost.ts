
export interface IPost {
  id: number;
  user: string;
  time: string;
  location: string;
  content: string;
  images: string[];
  likes: number;
  comments: number;
}
