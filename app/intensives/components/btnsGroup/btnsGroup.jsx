import styles from "./btnsGroup.module.css";

import { btnsData } from "./btnsData";

export default function BtnsGroup({ onClick }) {
  return (
    <ul className={styles.raitingList}>
      {btnsData.map(({ id, raiting, img }) => (
        <li key={id} className={styles.raitingItem}>
          <button
            className={styles.raitingBtn}
            onClick={() => onClick(raiting)}
          >
            {img}
          </button>
        </li>
      ))}
    </ul>
  );
}
