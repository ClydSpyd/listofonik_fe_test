import styles from "./JoinSession.module.scss";
import MotionDiv from "../../components/ui/MotionDiv";
import { useRef, useState } from "react";
import LoaderCircleSpin from "../../components/ui/LoaderCircleSpin/LoaderCircleSpin";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import JoinCard from "../../components/ui/JoinCard/JoinCard";
import { addAnimation } from "../../utilities/addAnimation";

const JoinSession = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const id = search.get("id");
  const [loading, toggleLoading] = useState<boolean>(!!id);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    toggleLoading(!!id);
  }, [id]);

  const handleSubmit = () => {
    if(!input){
      setError("Please enter a code");
      return addAnimation("shakeHoriz", cardRef, 400);
    }

    cardRef.current!.classList.add(styles.submit);
    setTimeout(() => {
      toggleLoading(true);
      navigate("/join?id=1234");
    }, 50);
    
  };

  return (
    <MotionDiv
      className={`${styles.pageContainer} flex-column align-center`}
      variant={"slideLeft"}
    >
      {!loading ? (
        <JoinCard
          cardRef={cardRef}
          callback={handleSubmit}
          error={error}
          handleInput={setInput}
        />
      ) : (
        <div className={`${styles.loaderWrapper}`}>
          <LoaderCircleSpin />
          <p>Entering party session...</p>
        </div>
      )}
    </MotionDiv>
  );
};

export default JoinSession;
