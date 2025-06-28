import { ReactNode } from "react";
import styles from "./section-title.module.css";

type Props = {
  children: ReactNode;
};

export function SectionTitle({ children }: Props) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}
