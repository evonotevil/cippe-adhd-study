import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
  direction?: -1 | 0 | 1;
  className?: string;
}

export function PageTransition({ children, direction = 1, className = '' }: PageTransitionProps) {
  const reduceMotion = useReducedMotion();
  const distance = reduceMotion ? 0 : direction * 14;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: distance }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: reduceMotion ? 0 : -distance * 0.55 }}
      transition={{ duration: reduceMotion ? 0.08 : 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
