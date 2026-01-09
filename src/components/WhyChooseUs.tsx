import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Users, TrendingUp, Video } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: "Foco absoluto em empresas SaaS B2B",
    description: "Toda nossa expertise, do planejamento à execução, é voltada às necessidades específicas do modelo de software como serviço.",
    image: "https://blueoceansem.com.br/wp-content/uploads/2025/12/card-07-e1767030366736.png"
  },
  {
    icon: BarChart3,
    title: "Metodologia Comprovada",
    description: "Abordagem estratégica baseada em dados e refinada ao longo de mais de 668 SaaS atendidos.",
    image: "https://blueoceansem.com.br/wp-content/uploads/2025/12/card-08-e1767030613171.png"
  },
  {
    icon: Users,
    title: "Time 360° Especializado",
    description: "Nossos especialistas atuam como uma extensão do seu time, cobrindo todo o ciclo de marketing e vendas, da geração de demanda à conversão e retenção.",
    image: "https://blueoceansem.com.br/wp-content/uploads/2025/12/card-06-e1767030297432.png"
  },
  {
    icon: TrendingUp,
    title: "Foco em Performance",
    description: "Cultura e valores guiados por resultados.",
    image: "https://blueoceansem.com.br/wp-content/uploads/2025/12/card-05-e1767018219911.png"
  },
  {
    icon: Video,
    title: "Conteúdo na nossa estrutura interna",
    description: "Produção audiovisual no nosso estúdio interno e copywriting técnico de alto nível que garantem campanhas criativas e estratégicas que destacam seu SaaS frente à concorrência.",
    image: "https://blueoceansem.com.br/wp-content/uploads/2025/12/card-04-e1767017852426.png"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="por-que-escolher" className="py-24 relative overflow-hidden bg-brand-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Por que escolher a <span className="text-brand-accent">Blue Ocean</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Exclusividade, método e resultados
          </motion.p>
        </div>

        {/* Grid de cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-black/40 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={reason.image} 
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-brand-accent/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-brand-accent/30">
                    <reason.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

