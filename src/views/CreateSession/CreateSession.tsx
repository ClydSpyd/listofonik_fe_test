import styles from "./CreateSession.module.scss";
import MotionDiv from "../../components/ui/MotionDiv";

type Props = {};

const CreateSession = (props: Props) => {
  return (
    <MotionDiv
      className={`${styles.pageContainer} flex-column align-center`}
      variant={"slideRight"}
    >
      <div className={styles.box}><h1>=)</h1></div>
    </MotionDiv>
  );
};

export default CreateSession;
