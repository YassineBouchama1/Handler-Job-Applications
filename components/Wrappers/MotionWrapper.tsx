'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const MotionWrapper: FC<MotionWrapperProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4 }
      }}
      className={className}
      style={{
        position: 'relative',
        isolation: 'auto',
        zIndex: 1
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;