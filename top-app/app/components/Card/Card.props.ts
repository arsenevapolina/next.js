import { DetailedHTMLProps, HTMLAttributes } from "react";
export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  img: string;
  title: string;
  text: string;
  time: number;
  likes: number;
}
