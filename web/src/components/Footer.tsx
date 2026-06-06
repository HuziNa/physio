import React from 'react';
import { motion } from 'framer-motion';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-primary pt-16 pb-8 md:pt-24 md:pb-12 border-t border-white/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-24">
        <div className="flex flex-col gap-6 md:gap-8 sm:col-span-2 lg:col-span-1">
          <a className="text-2xl md:text-3xl font-display font-black text-pure-white flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-secondary text-3xl md:text-4xl">analytics</span> RecoverAI
          </a>
          <p className="text-surface-variant/60 text-xs md:text-sm leading-relaxed pr-4 md:pr-10 font-body">
            The leading intelligence platform for spinal and back health rehabilitation. Professional care, digitally delivered with AI precision.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-electric-lime transition-colors">public</span>
            <span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-electric-lime transition-colors">video_library</span>
            <span className="material-symbols-outlined text-outline-variant cursor-pointer hover:text-electric-lime transition-colors">mail</span>
          </div>
        </div>
        <div>
          <h4 className="text-pure-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-10 font-display">Product</h4>
          <nav className="flex flex-col gap-4 md:gap-5">
            <a className="text-surface-variant/60 hover:text-pure-white transition-colors text-xs md:text-sm font-bold font-display" href="#">Clinical Protocols</a>
            <a className="text-surface-variant/60 hover:text-pure-white transition-colors text-xs md:text-sm font-bold font-display" href="#">For Orthopedics</a>
            <a className="text-surface-variant/60 hover:text-pure-white transition-colors text-xs md:text-sm font-bold font-display" href="#">Research &amp; Studies</a>
          </nav>
        </div>
        <div>
          <h4 className="text-pure-white font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 md:mb-10 font-display">Resources</h4>
          <nav className="flex flex-col gap-4 md:gap-5">
            <a className="text-surface-variant/60 hover:text-pure-white transition-colors text-xs md:text-sm font-bold font-display" href="#">Contact Specialist</a>
            <a className="text-surface-variant/60 hover:text-pure-white transition-colors text-xs md:text-sm font-bold font-display" href="#">Patient Support</a>
            <a className="text-surface-variant/60 hover:text-pure-white transition-colors text-xs md:text-sm font-bold font-display" href="#">Clinic Onboarding</a>
          </nav>
        </div>
        <div className="bg-white/[0.03] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 sm:col-span-2 lg:col-span-1">
          <h4 className="text-pure-white font-black text-lg md:text-xl mb-3 md:mb-4 font-display">Start Recovery</h4>
          <p className="text-surface-variant/50 text-[10px] md:text-xs mb-6 md:mb-8 leading-relaxed font-body">Integrate AI-powered back care into your medical practice today.</p>
          <button className="w-full py-3 md:py-4 bg-electric-lime text-primary font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all font-display text-sm md:text-base">Request Demo</button>
        </div>
      </div>
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-[8px] md:text-[10px] font-black text-surface-variant/40 uppercase tracking-[0.2em] md:tracking-[0.3em] font-display">
          © 2024 RecoverAI. All rights reserved. Precision Spinal Rehabilitation Solutions.
        </p>
        <div className="flex justify-center md:justify-end gap-6 md:gap-8 text-[8px] md:text-[10px] font-black text-surface-variant/40 uppercase tracking-[0.2em] md:tracking-[0.3em] font-display">
          <a className="hover:text-pure-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-pure-white transition-colors" href="#">Terms</a>
        </div>
      </div>
    </motion.footer>
  );
};
