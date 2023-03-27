import styles from './GradientButton.module.scss';

type Props = {
  btnText: string;
}

const GradientButton = ({ btnText }: Props) => {
  return (
    <div className={styles.gradientBtn}>
      <p>{btnText}</p>
    </div>
  )
}

export default GradientButton