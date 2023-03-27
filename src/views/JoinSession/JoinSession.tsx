import styles from "./JoinSession.module.scss";
import MotionDiv from "../../components/ui/MotionDiv";
import { useRef, useState } from "react";
import LoaderCircleSpin from "../../components/ui/LoaderCircleSpin/LoaderCircleSpin";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import JoinCard from "../../components/ui/JoinCard/JoinCard";
import { addAnimation } from "../../utilities/addAnimation";
import { useQueue } from "../../contexts/QueueContext";

const JoinSession = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const id = search.get("id");
  const [loading, toggleLoading] = useState<boolean>(!!id);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const cardRef = useRef<HTMLDivElement>(null);
  const { queue, setQueue } = useQueue();
  useEffect(() => {
    toggleLoading(!!id);
  }, [id]);

  const handleSubmit = () => {
    if (!input) {
      setError("Please enter a code");
      return addAnimation("shakeHoriz", cardRef, 400);
    }

    cardRef.current!.classList.add(styles.submit);
    setTimeout(() => {
      toggleLoading(true);
      navigate("/join?id=1234");
    }, 50);

    const items = [
      { title: "hello", thumbnail: "world", id: "666", url: "hello world" },
    ];
    setTimeout(() => {
      setQueue(items);
    }, 5000);
    setTimeout(() => {
      setQueue([...items, ...items, ...items]);
    }, 8000);
  };

  return (
    <MotionDiv
      className={`${styles.pageContainer} flex-column align-center`}
      variant={"slideUp"}
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
          <p>{queue?.length}</p>
        </div>
      )}
    </MotionDiv>
  );
};

export default JoinSession;
