import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { heroData } from '../data/mockData';

export interface HeroProps { }

export const Hero: React.FC<HeroProps> = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-12 lg:pt-0">
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="z-10 order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h1 variants={itemVariants} className="mb-6 md:mb-8 text-primary font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">
            {heroData.title1} <br />{heroData.title2} <span className="text-on-primary-container font-black">{heroData.titleHighlight}</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-on-surface-variant mb-10 md:mb-12 max-w-lg font-body">
            {heroData.description}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-5">
            <button className="bg-electric-lime text-primary font-black px-6 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 font-display w-full sm:w-auto">
              {heroData.primaryButton}
            </button>
            <button className="border-2 border-primary text-primary font-black px-6 py-4 md:px-10 md:py-5 rounded-xl text-base md:text-lg hover:bg-surface-container transition-all font-display w-full sm:w-auto">
              {heroData.secondaryButton}
            </button>
          </motion.div>
        </motion.div>

        <div className="relative order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-1000"
          >
            <img alt="Hero Graphic" className="w-full h-[300px] md:h-[450px] lg:h-[600px] object-cover" src={heroData.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};
