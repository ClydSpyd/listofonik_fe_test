import { FiPlusSquare } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import styles from "./LandingPage.module.scss";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardData } from "../../types/CardData";
import Card from "../../components/LandingCard/LandingCard";
import MotionDiv from "../../components/ui/MotionDiv";

const cardData: CardData[] = [
  {
    cardTitle: "Host",
    cardText:
      "Host a party and allow users to add to your queue and vote on what they want to hear next",
    btnText: "Host a party",
    Icon: FiPlusSquare,
    route: "/host",
    motionVariant: window.innerWidth,
  },
  {
    cardTitle: "Join",
    cardText:
      "Join a party using a party code and vote for what you want to hear next",
    btnText: "Join a party",
    Icon: FaUsers,
    route: "/join",
    motionVariant: -window.innerWidth,
  },
];

function LandingPage() {
  const navigate = useNavigate();
  const handleNavigate = (route: string, anim: number) => {
    navigate(route);
  };
  return (
    <MotionDiv variant={"noExit"} initial={"opacity"}>
      <>
        {/* // desktop cards */}
        <div className={styles.cardsWrapper}>
          {cardData.map((card) => {
            return (
              <div
                key={card.cardTitle}
                onClick={() => handleNavigate(card.route, card.motionVariant)}
              >
                <Card key={card.cardTitle} cardData={card} />
              </div>
            );
          })}
        </div>

        {/* //mobile buttons */}
        <div className={`${styles.buttons}`}>
          {cardData.map(({ Icon, route, motionVariant, cardTitle }) => {
            return (
              <div
                key={cardTitle}
                className={`${styles.btn}`}
                onClick={() => handleNavigate(route, motionVariant)}
              >
                <Icon />
                <p>{cardTitle}</p>
                <div className={`${styles.overlay}`}/>
              </div>
            );
          })}
        </div>
      </>
    </MotionDiv>
  );
}

export default LandingPage;
