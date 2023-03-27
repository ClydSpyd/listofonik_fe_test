import styles from "./LoaderCircleSpin.module.scss";

type Props = {};

const LoaderCircleSpin = (props: Props) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}/>
    </div>
  );
};

export default LoaderCircleSpin;
