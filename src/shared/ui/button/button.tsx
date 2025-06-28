import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

import styles from "./button.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...rest }, ref) => {
    return (
      <button className={styles.button} ref={ref} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
