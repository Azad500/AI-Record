import React from "react";
import styles from "./Loading.module.scss";
import AllinformationJs from "../informations";

export default function Loading() {
  return (
    <div className={styles.spinner_overlay}>
      <div className={styles.spinner} />
      <p>{AllinformationJs.Loading}</p>
    </div>
  );
}
