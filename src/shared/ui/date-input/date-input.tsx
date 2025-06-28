import { useId } from "react";

import styles from "./date-input.module.css";

type Props = {
  label?: string;
};

export function DateInput({ label }: Props) {
  const id = useId();

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input id={id} type="date" className={styles.input} />
    </div>
  );
}
