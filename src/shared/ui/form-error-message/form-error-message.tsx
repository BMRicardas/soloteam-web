import { JSXElementConstructor, ReactElement } from "react";
import { FieldErrorsImpl } from "react-hook-form";
import {
  ErrorMessage,
  Props as ErrorMessageProps,
} from "@hookform/error-message";
import styles from "./form-error-message.module.css";

export function FormErrorMessage({
  name,
  errors,
  render,
}: ErrorMessageProps<
  Partial<FieldErrorsImpl<{ [x: string]: any }>>,
  ReactElement<unknown, string | JSXElementConstructor<any>>
>) {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={
        render ||
        (({ messages, message }) =>
          messages ? (
            Object.entries(messages).map(([type, message]) => (
              <p className={styles.error} key={type}>
                {message}
              </p>
            ))
          ) : message ? (
            <p className={styles.error}>{message}</p>
          ) : null)
      }
    />
  );
}
