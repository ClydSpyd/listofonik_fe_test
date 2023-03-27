import styles from './CircleSPinnerText.module.scss'

type Props = {}

const CircleSpinnerText = (props: Props) => {
  return (
    <div className={styles.container}>
     <div className={styles.inner}>
     </div>
     <span>
         Loading.....
     </span>
 </div>
  )
}

export default CircleSpinnerText