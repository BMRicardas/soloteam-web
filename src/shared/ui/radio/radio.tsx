import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./radio.module.css";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  // How can i name radio props? because there might be multiple options

  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
};

export const Radio = forwardRef<HTMLInputElement, Props>(
  ({ label, options, ...rest }, ref) => {
    return (
      <div className={styles.radioContainer}>
        <label className={styles.label}>{label}</label>
        <div className={styles.options}>
          {options.map((option) => (
            <label key={option.value} className={styles.option}>
              <input
                type="radio"
                value={option.value}
                name="radio-group"
                className={styles.input}
                {...rest}
                ref={ref}
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  }
);

Radio.displayName = "Radio";
