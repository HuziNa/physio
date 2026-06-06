import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export interface PatientAppProps {}

export const PatientApp: React.FC<PatientAppProps> = () => {
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <section className="py-20 md:py-40 bg-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-secondary/5 skew-x-0 lg:skew-x-12 translate-x-0 lg:translate-x-1/4"></div>
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        <div className="relative order-2 lg:order-1">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-electric-lime/10 blur-[100px] md:blur-[150px] rounded-full"></div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full max-w-[320px] md:max-w-[380px] mx-auto bg-white p-3 md:p-4 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] md:border-[12px] border-primary-container"
          >
            <div className="bg-surface p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] h-[500px] md:h-[640px] flex flex-col font-display">
              <div className="flex justify-between items-center mb-6 md:mb-8">
                <span className="text-primary font-black tracking-tight text-base md:text-lg">Good Morning, Alex</span>
                <div className="relative">
                  <span className="material-symbols-outlined text-secondary">notifications</span>
                  <span className="absolute -top-1 -right-1 w-2 md:w-2.5 h-2 md:h-2.5 bg-secondary rounded-full border-2 border-surface"></span>
                </div>
              </div>
              <div className="bg-pure-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-lg border border-outline-variant/20 mb-6 md:mb-8">
                <p className="text-[9px] md:text-[10px] font-black text-on-surface-variant mb-1 md:mb-2 uppercase tracking-widest">Today's Focus</p>
                <p className="text-lg md:text-xl font-black text-primary mb-4 md:mb-6">Lumbar Stabilization</p>
                <div className="flex justify-between text-[9px] md:text-[10px] font-black mb-1 md:mb-2">
                  <span className="text-secondary">Progress: 60%</span>
                  <span className="text-gray-400">Day 12/30</span>
                </div>
                <div className="w-full bg-surface-container h-2 md:h-3 rounded-full overflow-hidden">
                  <div className="bg-secondary w-[60%] h-full rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 mt-auto">
                <div className="bg-primary text-on-primary p-4 md:p-5 rounded-xl md:rounded-2xl flex justify-between items-center shadow-xl shadow-primary/20">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-[10px] md:text-xs font-black opacity-50">01</span>
                    <span className="font-black text-sm md:text-base">Pelvic Tilts</span>
                  </div>
                  <span className="material-symbols-outlined text-electric-lime">play_circle</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-pure-white order-1 lg:order-2 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-[6rem] font-black leading-[0.95] tracking-[-0.04em] mb-6 md:mb-10 font-display">The Patient App <br className="hidden lg:block"/><span className="text-electric-lime">Your Back Needs</span></h2>
          
          
          <motion.ul 
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:gap-8 mb-8 md:mb-8 text-left max-w-md mx-auto lg:mx-0"
          >
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-electric-lime text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined font-black text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
              </span>
              <span className="text-base md:text-lg font-black tracking-tight font-display">Clear 4K Spinal Exercise Library</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-electric-lime text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined font-black text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>notifications_active</span>
              </span>
              <span className="text-base md:text-lg font-black tracking-tight font-display">Smart Adherence Notifications</span>
            </motion.li>
            <motion.li variants={listItemVariants} className="flex items-center gap-4 md:gap-6 group">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-electric-lime text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0">
                <span className="material-symbols-outlined font-black text-[18px] md:text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
              </span>
              <span className="text-base md:text-lg font-black tracking-tight font-display">Direct Link to Your Doctor</span>
            </motion.li>
          </motion.ul>
          
          <button className="w-full sm:w-auto bg-pure-white text-primary font-black px-8 py-5 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-lg md:text-xl hover:bg-electric-lime transition-all hover:scale-105 active:scale-95 shadow-2xl font-display mt-4 lg:mt-0">
            Download Patient App
          </button>
        </motion.div>
      </div>
    </section>
  );
};
