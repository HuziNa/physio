import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { specializationsData } from '../data/mockData';

export interface SpinalSpecializationsProps {}

export const SpinalSpecializations: React.FC<SpinalSpecializationsProps> = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 20 } }
  };

  return (
    <section className="py-20 md:py-32">
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-8 md:gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em] text-primary mb-4 md:mb-6 font-display">
              {specializationsData.title1} <span className="text-secondary">{specializationsData.title2}</span>
            </h2>
            <p className="text-lg md:text-xl text-on-surface-variant font-body">
              {specializationsData.description}
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-primary font-black text-xs md:text-sm uppercase tracking-[0.3em] flex items-center gap-2 md:gap-3 border-b-4 border-primary pb-2 hover:text-secondary hover:border-secondary transition-all font-display self-start lg:self-auto"
          >
            {specializationsData.buttonText} <span className="material-symbols-outlined text-lg md:text-xl">arrow_forward</span>
          </motion.button>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {specializationsData.items.map((item) => (
            <motion.div variants={cardVariants} key={item.id} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-4 md:mb-8 relative shadow-xl transition-all duration-700 group-hover:-translate-y-4 group-hover:shadow-2xl">
                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src={item.image} />
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 p-6 md:p-8 glass-card rounded-3xl md:rounded-[2rem] border border-white/40">
                  <h4 className="text-xl md:text-2xl font-display font-black text-primary mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-[10px] md:text-xs font-black text-on-surface-variant uppercase tracking-widest font-display">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
