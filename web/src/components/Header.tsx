import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 transition-shadow ${scrolled ? 'shadow-xl' : ''}`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto py-4">
        <a className="text-xl md:text-2xl font-display font-black text-primary flex items-center gap-2" href="#">
          <span className="material-symbols-outlined text-secondary text-2xl md:text-3xl">analytics</span> RecoverAI
        </a>
        <nav className="hidden lg:flex gap-10 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 text-sm tracking-tight font-display" href="#">Spinal Care</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold tracking-tight font-display" href="#">For Doctors</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold tracking-tight font-display" href="#">For Patients</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold tracking-tight font-display" href="#">Pricing</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 md:px-6 md:py-2 rounded-full bg-primary text-on-primary font-display font-black text-[10px] md:text-xs uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 duration-150">
            Clinic Login
          </button>
        </div>
      </div>
    </motion.header>
  );
};
