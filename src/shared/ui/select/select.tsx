import { ChangeEvent, forwardRef, SelectHTMLAttributes, useId } from "react";
import styles from "./select.module.css";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Array<{ value: string; label: string }>;
  multiple?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, multiple, ...rest }, ref) => {
    const id = useId();

    interface HandleChangeEvent extends ChangeEvent<HTMLSelectElement> {}

    function handleChange(event: HandleChangeEvent): void {
      if (multiple) {
        const values: string[] = Array.from(
          event.target.selectedOptions,
          (option) => option.value
        );
        rest.onChange?.({
          ...event,
          target: {
            ...event.target,
            // @ts-expect-error: RHF expects value as string[] for multi-select, but DOM typings require string. This cast is intentional and safe for RHF integration.
            value: values,
          },
        });
      } else {
        rest.onChange?.(event);
      }
    }

    return (
      <div className={styles.selectContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <select
          id={id}
          className={styles.select}
          multiple={multiple}
          onChange={handleChange}
          ref={ref}
          {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
