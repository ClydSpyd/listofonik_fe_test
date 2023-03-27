import styles from './GradientButton.module.scss';

type Props = {
  btnText: string;
  customStyles?: {}
}

const GradientButton = ({ btnText, customStyles = {} }: Props) => {
  return (
    <div className={styles.gradientBtn} style={customStyles}>
      <p>{btnText}</p>
    </div>
  )
}

export default GradientButton