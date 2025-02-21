import { UseFormRegister } from "react-hook-form";

export interface InputProps {
  type?: string;
  register: UseFormRegister<any>;
  name: string;
  required?: { value: boolean; message: string };
  pattern?: { value: RegExp; message: string };
  error?: boolean;
  onFocus?: () => void;
  placeholder: string;
  className: string;
}
