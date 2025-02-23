import { UseFormRegister } from "react-hook-form";

export interface TextAreaProps {
  register: UseFormRegister<any>;
  name: string;
  required?: { value: boolean; message: string };
  error?: boolean;
  onFocus?: () => void;
  placeholder: string;
  className: string;
}