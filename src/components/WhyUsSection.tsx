import { motion } from "framer-motion";
import { Monitor, Code2, BarChart3, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const reasons: { icon: LucideIcon; title: string; desc: string; stat: string; statLabel: string }[] = [
  {
    icon: Monitor,
    title: "Web-First Solutions",
    desc: "Fully responsive, cloud-hosted applications accessible from any device, anywhere.",
    stat: "100%",
    statLabel: "Cloud Native",
  },
  {
    icon: Code2,
    title: "API-Driven Architecture",
    desc: "RESTful APIs at the core — seamlessly integrate with third-party tools and services.",
    stat: "50+",
    statLabel: "Integrations",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Live dashboards and interconnected data streams across all your platforms.",
    stat: "<1s",
    statLabel: "Data Latency",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "99.9% uptime on hardened infrastructure with end-to-end encryption and backups.",
    stat: "99.9%",
    statLabel: "Uptime SLA",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--secondary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--secondary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Our Edge</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-accent">Finotrium</span>?
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            We build scalable solutions that automate your business processes — so you can focus on growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center bg-primary-foreground/[0.03] rounded-lg p-6 border border-primary-foreground/[0.06] hover:border-accent/30 hover:bg-primary-foreground/[0.06] transition-all duration-200"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-200">
                <item.icon size={26} className="text-accent" />
              </div>
              <p className="font-display font-bold text-2xl text-accent mb-0.5">{item.stat}</p>
              <p className="text-primary-foreground/40 text-[10px] uppercase tracking-wider mb-3">{item.statLabel}</p>
              <h3 className="font-display font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-primary-foreground/50 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
