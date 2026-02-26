"use client";

import styles from "./page.module.css";

import BlockWrap from "../../components/blockWrap/blockWrap";
import Container from "../../components/container/container";

export default function enterEmail() {
  return (
    <Container>
      <BlockWrap>
        <p className={styles.boldText}>Thank You! </p>
        <p className={styles.text}>
          An invite and instructions on how to join our mini-course will be sent
          to the email you provided. 
        </p>
        <p className={styles.text}>See you inside! </p>
      </BlockWrap>
    </Container>
  );
}
