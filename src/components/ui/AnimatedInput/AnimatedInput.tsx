import styles from './AnimatedInput.module.scss';

type Props = {
  lableText: string;
}

const AnimatedInput = ({ lableText }: Props) => {
  return (
    <div className={`${styles.inputbox}`}>
      <input autoFocus required={true} type="text" />
      <span>{lableText}</span>
      <div className={`${styles.line}`}/>
    </div>
  )
}

export default AnimatedInput