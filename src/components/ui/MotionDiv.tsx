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

  const variants: {
    [key in MotionVariant]: { initial: {}; animate: {}; exit: {} };
  } = {
    slideLeft: {
      initial: { x: window.innerWidth },
      animate: { x: 0 },
      exit: { x: window.innerWidth },
    },
    slideRight: {
      initial: { x: -window.innerWidth },
      animate: { x: 0 },
      exit: { x: -window.innerWidth },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    noExit: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { },
    },
    slideUp: {
      initial: { y: 100, opacity: 0  },
      animate: { y: 0, opacity: 1 },
      exit: { opacity: 0  },
    },
  };

  const getMotionValue = () => {
    const value =
      variant === "slideLeft" ? window.innerWidth : -window.innerWidth;
    setMotionValue(value);
  };

  return !motionValue ? (
    <></>
  ) : (
    <motion.div
      className={className ?? "motion-div"}
      transition={{ ease: "easeOut", duration: 0.35 }}
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      exit={variants[variant].exit}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
