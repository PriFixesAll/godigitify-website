'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, Sparkles, Layers, Activity } from 'lucide-react';
import { floatCardVariants, reverseFloatVariants } from '@/animations/hero';

export function AbstractVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center">
      {/* Background Ambient Radial Glow & Mesh Spheres */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-glow" />
      
      {/* Outer Orbital Ring */}
      <div className="absolute w-[90%] h-[90%] rounded-full border border-indigo-500/15 animate-spin-[60s_linear_infinite]" />
      <div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-purple-500/20 animate-spin-[40s_linear_infinite_reverse]" />

      {/* Central AI Node Glass Structure */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 glass-panel rounded-3xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl border border-indigo-400/20"
      >
        {/* Glow Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase">
              AI Core Engine v4.0
            </span>
          </div>
          <Cpu className="w-5 h-5 text-indigo-400" />
        </div>

        {/* Live System Metric Waves */}
        <div className="my-4 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span>Neural Processing</span>
            <span className="font-mono text-indigo-300">98.4%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '98.4%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full"
            />
          </div>

          <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
            <span>Engineering Velocity</span>
            <span className="font-mono text-purple-300">10x Output</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '88%' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
            />
          </div>
        </div>

        {/* Footer Code Indicator */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Autonomous Stack</span>
          </div>
          <span className="text-emerald-400 flex items-center gap-1">
            ● Active
          </span>
        </div>
      </motion.div>

      {/* Floating Card 1: Top Right Metric Panel */}
      <motion.div
        variants={floatCardVariants}
        animate="animate"
        className="absolute top-4 -right-2 sm:-right-6 z-20 glass-card-sm p-4 rounded-2xl flex items-center gap-3 border border-indigo-400/30 shadow-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono text-slate-400">Response Latency</p>
          <p className="text-sm font-bold text-white font-mono">&lt; 12ms Real-time</p>
        </div>
      </motion.div>

      {/* Floating Card 2: Bottom Left Security & Cloud Badge */}
      <motion.div
        variants={reverseFloatVariants}
        animate="animate"
        className="absolute -bottom-2 -left-2 sm:-left-6 z-20 glass-card-sm p-4 rounded-2xl flex items-center gap-3 border border-purple-400/30 shadow-xl"
      >
        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[10px] uppercase font-mono text-slate-400">Enterprise SLA</p>
          <p className="text-sm font-bold text-white font-mono">99.99% Guaranteed</p>
        </div>
      </motion.div>

      {/* Floating Card 3: Top Left AI Transformation Pill */}
      <motion.div
        variants={floatCardVariants}
        animate="animate"
        className="absolute -top-4 left-4 z-20 glass-card-sm px-3.5 py-2 rounded-full flex items-center gap-2 border border-cyan-400/30 shadow-lg"
      >
        <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-[10s_linear_infinite]" />
        <span className="text-xs font-medium text-cyan-200">Autonomous Workflows</span>
      </motion.div>

      {/* Floating Card 4: Bottom Right Activity Widget */}
      <motion.div
        variants={reverseFloatVariants}
        animate="animate"
        className="absolute bottom-6 right-2 z-20 glass-card-sm px-4 py-2.5 rounded-2xl flex items-center gap-2.5 border border-indigo-500/30 shadow-lg"
      >
        <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
        <div className="text-xs">
          <span className="text-slate-400">Deployments: </span>
          <span className="font-mono font-bold text-white">Continuous</span>
        </div>
      </motion.div>
    </div>
  );
}
