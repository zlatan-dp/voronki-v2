import styles from "./bigBtnsGroup.module.css";
import Image from "next/image";

import { bigBtnsData } from "./bigBtnsData";

export default function BigBtnsGroup({ onClick }) {
  return (
    <ul className={styles.raitingList}>
      {bigBtnsData.map(({ id, answer, img }) => (
        <li key={id} className={styles.raitingItem}>
          <button className={styles.raitingBtn} onClick={() => onClick(answer)}>
            <div className={styles.imgWrap}>
              <Image src={img} alt="logo" width={41} height={40} />
            </div>
            <p>{answer}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
