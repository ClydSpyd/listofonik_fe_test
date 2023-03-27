import React, { RefObject } from "react";
import GradientButton from "../GradientButton/GradientButton";
import styles from "./JoinCard.module.scss";

type Props = {
  callback: () => void;
  handleInput: (val: string) => void;
  error?: string | null;
  cardRef: RefObject<HTMLDivElement>;
};

const JoinCard = React.forwardRef(
  ({ callback, error, cardRef, handleInput }: Props, ref) => {
    return (
      <div ref={cardRef} className={`${styles.cardWrapper}`}>
        <h2>Enter code to join the party now!</h2>
        <div className={`${styles.inputWrapper}`}>
          <input
            onChange={(e) => handleInput(e.target.value)}
            required={true}
            type="text"
            name="code"
            autoComplete="off"
          />
          <p className={`${styles.label}`}>Party code</p>
          {error && <p className={`${styles.error}`}>{error}</p>}
        </div>
        <div onClick={callback} className={`${styles.btnWrapper}`}>
          <GradientButton customStyles={{height: "60px"}} btnText={"Submit"} />
        </div>
      </div>
    );
  }
);

export default JoinCard;
