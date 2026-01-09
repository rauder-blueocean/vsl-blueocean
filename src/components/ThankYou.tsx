import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Mail, Clock, ArrowLeft } from 'lucide-react';
import logooficial from '../acests/logooficial.png';

export const ThankYou = () => {

  return (
    <div className="min-h-screen bg-brand-900 overflow-x-hidden relative">
      {/* Background Effects - same as main site */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 bg-grid-white bg-[size:40px_40px] opacity-[0.06]" 
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        />
        
        {/* Primary Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Overlay Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/50 to-brand-900 pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md bg-brand-900/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex-shrink-0 cursor-pointer">
              <img src={logooficial} alt="Blue Ocean Logo" className="h-6 md:h-8 w-auto" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-16 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Success Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-24 h-24 md:w-32 md:h-32 bg-brand-accent/10 rounded-full flex items-center justify-center border-4 border-brand-accent/30 backdrop-blur-sm">
                <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-brand-accent" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Reunião <span className="text-gradient">agendada</span> com sucesso!
          </motion.h1>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
          >
            Nossa equipe de especialistas em <span className="text-white font-semibold">SaaS B2B</span> entrará em contato em breve.
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl text-left group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-accent/20 flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Verifique seu e-mail</h3>
                  <p className="text-gray-400 text-sm">
                    Enviamos um e-mail de confirmação com os detalhes da reunião.
                  </p>
                </div>
              </div>
            </div>

            {/* Time Card */}
            <div className="glass-panel p-6 rounded-2xl text-left group hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center border border-brand-accent/20 flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Próximos passos</h3>
                  <p className="text-gray-400 text-sm">
                    Nossa equipe entrará em contato em até 24 horas para confirmar os detalhes.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Voltar para a página inicial</span>
            </a>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

