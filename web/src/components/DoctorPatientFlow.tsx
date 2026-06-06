import React from 'react';
import { motion } from 'framer-motion';

export interface DoctorPatientFlowProps {}

export const DoctorPatientFlow: React.FC<DoctorPatientFlowProps> = () => {
  return (
    <section className="bg-surface-container-low py-20 md:py-32 overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-margin-desktop max-w-container-max-width mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em] text-primary mb-6 font-display">Closing the <br className="hidden md:block"/><span className="text-secondary">Recovery Loop</span></h2>
          <p className="text-lg md:text-xl text-on-surface-variant font-body">Seamless collaboration between medical specialists and patients for better back health outcomes. Real-time data, clinical precision.</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 space-y-12 md:space-y-16 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative pl-6 md:pl-8 border-l-2 border-outline-variant/30 hover:border-secondary transition-colors"
            >
              <span className="text-[10px] font-black text-secondary mb-3 block uppercase tracking-[0.3em] font-display">For Specialists</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 md:mb-6">Precision Spinal Programming</h3>
              <p className="text-base md:text-lg text-on-surface-variant max-w-md mb-6 md:mb-8 font-body">Assign targeted sets, reps, and hold-times specifically for disc stability and core engagement. Update plans instantly based on feedback.</p>
              <div className="bg-surface-container rounded-2xl p-5 md:p-6 max-w-sm border border-outline-variant/30 shadow-sm w-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-primary font-display text-sm md:text-base">Cat-Cow Stretch</span>
                  <span className="text-[9px] md:text-[10px] font-black bg-electric-lime px-3 py-1 rounded-full uppercase tracking-tighter font-display">3 Sets</span>
                </div>
                <div className="flex flex-wrap gap-4 md:gap-6 text-[10px] md:text-xs font-black text-on-surface-variant uppercase tracking-widest font-display">
                  <span>10 Reps</span>
                  <span>5s Hold</span>
                  <span>2x Daily</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative pl-6 md:pl-8 border-l-2 border-outline-variant/30 hover:border-primary transition-colors"
            >
              <span className="text-[10px] font-black text-deep-forest mb-3 block uppercase tracking-[0.3em] font-display">For Patients</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4 md:mb-6">Log Progress &amp; Flare-ups</h3>
              <p className="text-base md:text-lg text-on-surface-variant mb-6 md:mb-8 max-w-md font-body">Easily report daily exercise completion and notify your doctor of pain spikes or relief.</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white p-4 md:p-5 rounded-2xl border border-outline-variant/30 shadow-md w-full max-w-sm">
                  <p className="text-[9px] md:text-[10px] font-black mb-3 text-on-surface-variant uppercase tracking-widest font-display">How is your back feeling?</p>
                  <div className="flex justify-between gap-2 md:gap-3">
                    {[1, 2, 3, 4, 5].map(num => (
                      <button key={num} className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center font-bold transition-all font-display ${num === 3 ? 'bg-secondary text-white shadow-lg shadow-secondary/20' : 'bg-surface-container hover:bg-primary hover:text-white text-primary'}`}>
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex-1 flex justify-center w-full"
          >
            {/* Mobile Phone UI */}
            <div className="relative w-[280px] md:w-full md:max-w-[340px] aspect-[1/2] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[12px] border-black bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden scale-[0.95] md:scale-100 origin-center">
              <div className="absolute inset-0 bg-[#f9fafb] flex flex-col p-5 md:p-6">
                <div className="flex justify-between items-center mb-5 md:mb-6 text-[9px] md:text-[10px] font-black font-display">
                  <span>15:26</span>
                  <div className="flex gap-1 items-center">
                    <span className="material-symbols-outlined text-[10px]">signal_cellular_alt</span>
                    <span className="material-symbols-outlined text-[10px]">wifi</span>
                    <span className="material-symbols-outlined text-[10px]">battery_5_bar</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-5 md:mb-6">
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 font-display">Good afternoon, huzi</h4>
                    <p className="text-[9px] md:text-[10px] text-gray-400 font-display font-bold">Tuesday, Jun 2</p>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#1d4ed8] font-black text-[10px] md:text-xs uppercase font-display">HU</div>
                </div>
                <div className="bg-[#c7d2fe] rounded-2xl md:rounded-3xl p-5 md:p-6 mb-5 md:mb-6 relative overflow-hidden">
                  <span className="text-[9px] md:text-[10px] font-bold text-[#4338ca]/60 mb-1 block font-display">Day 21/21</span>
                  <h5 className="text-xl md:text-2xl font-black text-[#1e1b4b] mb-1 font-display">Core<br />Strength</h5>
                  <p className="text-[10px] md:text-xs text-[#4338ca] mb-5 md:mb-6 font-display font-bold">Dr. naeem</p>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/50"></div>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white/80"></div>
                    </div>
                    <span className="text-[9px] md:text-[10px] font-bold text-[#1e1b4b] font-display">2 day streak</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6 md:mb-8 px-1 font-display">
                  <div className="flex flex-col items-center gap-1"><span className="text-[7px] md:text-[8px] text-gray-400 font-black uppercase">Sun</span><span className="text-[10px] md:text-xs font-bold">31</span></div>
                  <div className="flex flex-col items-center gap-1"><span className="text-[7px] md:text-[8px] text-gray-400 font-black uppercase">Mon</span><span className="text-[10px] md:text-xs font-bold">1</span></div>
                  <div className="flex flex-col items-center gap-1 bg-black text-white w-7 h-9 md:w-8 md:h-10 rounded-xl justify-center"><span className="text-[7px] md:text-[8px] font-black uppercase">Tue</span><span className="text-[10px] md:text-xs font-bold">2</span></div>
                  <div className="flex flex-col items-center gap-1"><span className="text-[7px] md:text-[8px] text-gray-400 font-black uppercase">Wed</span><span className="text-[10px] md:text-xs font-bold">3</span></div>
                  <div className="flex flex-col items-center gap-1"><span className="text-[7px] md:text-[8px] text-gray-400 font-black uppercase">Thu</span><span className="text-[10px] md:text-xs font-bold">4</span></div>
                  <div className="flex flex-col items-center gap-1"><span className="text-[7px] md:text-[8px] text-gray-400 font-black uppercase">Fri</span><span className="text-[10px] md:text-xs font-bold">5</span></div>
                  <div className="flex flex-col items-center gap-1"><span className="text-[7px] md:text-[8px] text-gray-400 font-black uppercase">Sat</span><span className="text-[10px] md:text-xs font-bold">6</span></div>
                </div>
                <h6 className="text-xs md:text-sm font-black mb-3 md:mb-4 font-display">Your plan</h6>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="bg-[#fde047] rounded-2xl md:rounded-3xl p-3 md:p-4 flex flex-col h-32 md:h-40 shadow-sm">
                    <span className="text-[7px] md:text-[8px] font-black bg-white/30 self-start px-2 py-0.5 rounded-full mb-2 md:mb-3 uppercase tracking-tighter font-display">Moderate pain</span>
                    <span className="text-[10px] md:text-xs font-bold leading-tight mb-2 font-display">Pain<br />Check-in</span>
                    <p className="text-lg md:text-xl font-black mt-auto font-display">4<span className="text-[8px] md:text-[10px] text-black/40">/10</span></p>
                    <div className="w-full h-1 bg-black/10 rounded-full mt-2 relative">
                      <div className="absolute left-[40%] -top-1 w-2 md:w-2.5 h-2 md:h-2.5 bg-black rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-[#dbeafe] rounded-2xl md:rounded-3xl p-3 md:p-4 flex flex-col h-32 md:h-40 shadow-sm">
                    <span className="text-[7px] md:text-[8px] font-black bg-white/50 self-start px-2 py-0.5 rounded-full mb-2 md:mb-3 uppercase tracking-tighter font-display">Not started</span>
                    <span className="text-[10px] md:text-xs font-bold leading-tight mb-2 font-display">Today's<br />Session</span>
                    <button className="bg-[#1e1b4b] text-white text-[9px] md:text-[10px] font-black py-1.5 md:py-2 rounded-xl w-full mt-auto font-display">Start</button>
                  </div>
                </div>
                <div className="mt-auto flex justify-between items-center py-2 border-t border-gray-100">
                  <span className="material-symbols-outlined text-gray-300 text-sm md:text-base">home</span>
                  <span className="material-symbols-outlined text-gray-300 text-sm md:text-base">bar_chart</span>
                  <span className="material-symbols-outlined text-gray-300 text-sm md:text-base">grid_view</span>
                  <span className="material-symbols-outlined text-gray-300 text-sm md:text-base">person</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
