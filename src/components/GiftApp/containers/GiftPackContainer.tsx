import React, { useState } from 'react';
import { Product } from '@/types/product';
import { Trash2, MoveDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AddItemParticles from '@/components/effects/AddItemParticles';

interface GiftPackContainerProps {
  title: string;
  item?: Product;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onItemClick?: (product: Product) => void;
  onRemoveItem?: (index: number) => void;
  containerIndex: number;
  className?: string;
}

const GiftPackContainer = ({
  title,
  item,
  onDrop,
  onItemClick,
  onRemoveItem,
  containerIndex,
  className = ""
}: GiftPackContainerProps) => {
  const [showParticles, setShowParticles] = useState(false);
  const [particlePosition, setParticlePosition] = useState({ x: 0, y: 0 });
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragOver(false);
    const rect = e.currentTarget.getBoundingClientRect();
    setParticlePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 1000);
    onDrop(e);
  };

  const isLargeSize = containerIndex === 0;
  const packSizeLabel = isLargeSize ? "Grand format" : "Format standard";

  return (
    <div className={className}>
      <div className="p-4 h-full flex flex-col relative overflow-hidden">
        <h3 className="text-lg font-medium text-[#6D0201] mb-3 border-b pb-2">
          {packSizeLabel} {containerIndex + 1}
        </h3>
        <motion.div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          animate={{
            scale: isDragOver ? 1.02 : 1,
            borderColor: isDragOver ? '#700100' : 'transparent'
          }}
          className="relative flex-1 flex items-center justify-center rounded-lg transition-all duration-300"
        >
          {!item && (
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center text-sm text-gray-500 pointer-events-none"
              animate={{ opacity: isDragOver ? 0.8 : 0.5 }}
            >
              <MoveDown className={`w-8 h-8 mb-2 text-gray-400 transition-all duration-300 ${isDragOver ? 'scale-110' : ''}`} />
              <span>Glissez un article ici</span>
            </motion.div>
          )}

          <AnimatePresence>
            {item && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group w-full"
              >
                <div
                  onClick={() => onItemClick?.(item)}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow flex items-center gap-4"
                >
                  <div className="relative">
                    <div className={`${isLargeSize ? 'w-24 h-24' : 'w-16 h-16'} rounded-md overflow-hidden bg-gray-50 flex-shrink-0`}>
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </div>
                    {item.size && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`
                          absolute -top-2 -right-2 
                          ${isLargeSize ? 'text-xs px-1.5 py-0.5' : 'text-xs px-1.5 py-0.5'} 
                          bg-[#6D0201] text-white rounded-full font-medium
                        `}
                      >
                        {item.size}
                      </motion.div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`${isLargeSize ? 'text-base' : 'text-base'} font-medium text-gray-900 truncate`}>
                      {item.name}
                    </div>
                    <div className={`${isLargeSize ? 'text-xs' : 'text-sm'} text-gray-600 mt-2`}>
                      {item.color && <span>Couleur: {item.color}</span>}
                    </div>
                    <div className={`${isLargeSize ? 'text-sm' : 'text-base'} text-[#6D0201] font-medium mt-2`}>
                      {item.price.toFixed(2)} TND
                    </div>
                  </div>
                </div>
                {onRemoveItem && (
                  <motion.button
                    onClick={() => onRemoveItem(containerIndex)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -top-2 -right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg"
                    aria-label="Retirer l'article"
                  >
                    <Trash2 size={16} />
                  </motion.button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {showParticles && (
            <AddItemParticles position={particlePosition} />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default GiftPackContainer;