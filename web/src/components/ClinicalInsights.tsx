import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export interface ClinicalInsightsProps {}

export const ClinicalInsights: React.FC<ClinicalInsightsProps> = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 md:py-32 bg-surface overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="bg-pure-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-12 lg:p-24 shadow-2xl border border-outline-variant/20 overflow-hidden relative">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute -right-10 md:-right-20 -top-5 md:-top-10 text-[80px] md:text-[140px] lg:text-[180px] font-black text-outline/[0.02] select-none pointer-events-none uppercase font-display"
          >
            Insight
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center relative z-10">
            <motion.div 
              className="lg:col-span-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.span variants={itemVariants} className="text-[10px] font-black text-secondary mb-4 md:mb-6 block uppercase tracking-[0.4em] font-display">AI FEATURE: CLINICAL INSIGHTS</motion.span>
              <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em] text-primary mb-6 md:mb-8 font-display">AI-Driven <br className="hidden md:block"/>Patient <br className="hidden md:block"/><span className="text-secondary">Summaries</span></motion.h2>
              <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-on-surface-variant mb-8 md:mb-10 font-body">
                RecoverAI analyzes weeks of patient data to generate a concise summary for your next checkup. Know exactly what's working and what's not in seconds.
              </motion.p>
              <div className="space-y-4 md:space-y-6">
                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary mt-1">trending_down</span>
                  <p className="text-sm md:text-base font-bold text-on-surface-variant font-body">Identifies correlations between activity and pain spikes.</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex gap-4 items-start">
                  <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                  <p className="text-sm md:text-base font-bold text-on-surface-variant font-body">Verifies exercise form through visual adherence data.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-3 w-full"
            >
              <div className="bg-surface-container-low p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-outline-variant shadow-inner">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-8 md:mb-10 border-b border-outline-variant/30 pb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-lg md:text-xl shadow-lg font-display shrink-0">AI</div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-primary font-display">Sarah J. - Recovery Summary</h4>
                    <p className="text-[10px] md:text-xs font-black text-on-surface-variant uppercase tracking-widest mt-1 font-display">Last 14 Days Active Tracking</p>
                  </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-pure-white p-5 md:p-6 rounded-2xl shadow-sm border border-outline-variant/10"
                    >
                      <p className="text-[9px] md:text-[10px] font-black text-on-surface-variant uppercase mb-2 tracking-tighter font-display">Pain Trend</p>
                      <p className="text-2xl md:text-3xl font-black text-secondary font-display">-22%</p>
                      <p className="text-[9px] md:text-[10px] text-on-surface-variant italic mt-1 font-body">vs last week</p>
                    </motion.div>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-pure-white p-5 md:p-6 rounded-2xl shadow-sm border border-outline-variant/10"
                    >
                      <p className="text-[9px] md:text-[10px] font-black text-on-surface-variant uppercase mb-2 tracking-tighter font-display">Adherence</p>
                      <p className="text-2xl md:text-3xl font-black text-primary font-display">91%</p>
                      <p className="text-[9px] md:text-[10px] text-on-surface-variant italic mt-1 font-body">(13/14 days completed)</p>
                    </motion.div>
                  </div>
                  <div className="p-5 md:p-6 bg-primary-container/10 border-l-[6px] md:border-l-8 border-primary rounded-r-2xl">
                    <p className="text-[10px] md:text-xs font-black text-primary mb-2 uppercase tracking-widest font-display">Clinical Suggestion:</p>
                    <p className="text-xs md:text-sm font-bold text-on-surface leading-relaxed italic font-body">"Patient reports mild pain after 'Hip Flexor' sets. Recommend reducing reps from 15 to 10 for the next week to stabilize lumbar tension."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
