import { CardData } from "../../types/CardData";
import GradientButton from "../ui/GradientButton/GradientButton";
import styles from "./LandingCard.module.scss";

type Props = {
  cardData: CardData;
};

const Card = ({ cardData: { cardTitle, cardText, btnText, Icon } }: Props) => {
  return (
    <div className={`${styles.landingCard} ${styles[cardTitle]}`}>
      <Icon />
      <h2>{cardTitle}</h2>
      <p className={`${styles.cardText}`}>{cardText}</p>
      <GradientButton btnText={btnText}/>

      {/* <button>
        <span className={styles.button}>Button</span>
      </button> */}
    </div>
  );
};

export default Card;
