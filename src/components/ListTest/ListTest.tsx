import { Reorder } from "framer-motion";
import React, { useState } from "react";
import styles from "./ListTest.module.scss";
type Props = {};

const ListTest = (props: Props) => {
  const [items, setItems] = useState<string[]>([
    "HELLO",
    "WORLD",
    "THIS",
    "IS A TEST",
  ]);

  return (
    <>
      <Reorder.Group
        className={styles.list}
        values={items}
        onReorder={setItems}
      >
        {items.map((item) => (
          <Reorder.Item
            dragListener={false}
            key={item}
            value={item}
            layoutScroll
          >
            <div className={styles.item}>
              <h4>{item}</h4>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <button
        onClick={() =>
          setItems(["New", "Words","HELLO", "WORLD", "THIS", "IS A TEST"])
        }
      >
        GO
      </button>
    </>
  );
};

export default ListTest;
