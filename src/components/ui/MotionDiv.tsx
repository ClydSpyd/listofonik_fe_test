import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

type Props = {
  className?: string;
  variant: MotionVariant;
  children: JSX.Element;
  initial?: "opacity" | "variant";
};

const MotionDiv = ({ className, variant, initial, children }: Props) => {
  const [motionValue, setMotionValue] = useState<number | null>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    getMotionValue();
  }, [width, variant]);

  const getMotionValue = () => {
    const value =
      variant === "slideLeft" ? window.innerWidth : -window.innerWidth;
    setMotionValue(value);
  };

  return !motionValue ? (
    <></>
  ) :
    <motion.div
      className={className ?? "motion-div"}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      initial={initial === "opacity" ? { opacity: 0 } : { x: motionValue }}
      animate={initial === "opacity" ? { opacity: 1 } : { x: 0 }}
      exit={
        variant !== "noExit"
          ? { x: motionValue, transition: { duration: 0.5 } }
          : {}
      }
    >
      {children}
    </motion.div>
};

export default MotionDiv;
