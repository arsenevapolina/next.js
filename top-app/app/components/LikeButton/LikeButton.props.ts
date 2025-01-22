import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonLikeProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  onChange?: () => void;
}
