import React from 'react';
import { motion } from 'framer-motion';

interface GiftBoxProps {
  onAnimationComplete: () => void;
}

export const GiftBox = ({ onAnimationComplete }: GiftBoxProps) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <style>
        {`
          .gift-box {
            perspective: 1000px;
          }
        `}
      </style>
      <motion.div
        className="gift-box"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={onAnimationComplete}
      >
        <div className="w-64 h-64 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">
          <h1 className="text-white text-2xl">Gift Box</h1>
        </div>
      </motion.div>
    </div>
  );
};
