import { motion } from "framer-motion";
import { Monitor, Code2, BarChart3, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Monitor,
    title: "Web-First Solutions",
    desc: "Fully responsive, cloud-hosted applications accessible from any device, anywhere.",
  },
  {
    icon: Code2,
    title: "API-Driven Architecture",
    desc: "RESTful APIs at the core — seamlessly integrate with third-party tools and services.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    desc: "Live dashboards and interconnected data streams across all your platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    desc: "99.9% uptime on hardened infrastructure with end-to-end encryption and backups.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-gradient-dark text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-accent">Finotrium</span>?
          </h2>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            We build scalable solutions that automate your business processes — so you can focus on growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-200">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
