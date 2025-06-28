import { forwardRef, InputHTMLAttributes, useId } from "react";

import styles from "./input.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  type?: "text" | "email" | "password" | "number";
};

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = "text", ...rest }, ref) => {
    const id = useId();

    return (
      <div className={styles.inputContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          className={styles.input}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
