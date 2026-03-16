import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Building2,
  GraduationCap,
  Landmark,
  BookOpen,
  ShoppingCart,
  Home,
  Globe,
  Wrench,
} from "lucide-react";

const services = [
  { icon: Building2, title: "Hospital Management", desc: "End-to-end patient care, billing, inventory and staff management.", color: "secondary" as const },
  { icon: GraduationCap, title: "School Management", desc: "Student records, grading, timetables, and parent communication.", color: "accent" as const },
  { icon: Landmark, title: "Loan Management", desc: "Loan origination, repayment tracking, risk scoring and reporting.", color: "secondary" as const },
  { icon: BookOpen, title: "Library Management", desc: "Cataloguing, borrowing, returns, and digital resource access.", color: "accent" as const },
  { icon: ShoppingCart, title: "E-Commerce System", desc: "Online storefronts, inventory, orders, and payment integration.", color: "accent" as const },
  { icon: Home, title: "Property Management", desc: "Tenant management, rent collection, maintenance and reporting.", color: "secondary" as const },
  { icon: Globe, title: "Website Development", desc: "Custom, responsive websites built for performance and SEO.", color: "accent" as const },
  { icon: Wrench, title: "Custom Systems", desc: "Bespoke management solutions tailored to your unique operations.", color: "secondary" as const },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">What We Build</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Management Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade systems engineered for reliability, security, and scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const colorClass = service.color === "accent" ? "text-accent" : "text-secondary";
            const bgClass = service.color === "accent" ? "bg-accent/10 group-hover:bg-accent/20" : "bg-secondary/10 group-hover:bg-secondary/20";
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 border border-border cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${bgClass} flex items-center justify-center mb-4 transition-colors duration-200`}>
                  <service.icon size={22} className={colorClass} />
                </div>
                <h3 className="font-display font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <span className={`inline-flex items-center gap-1 text-xs font-medium ${colorClass} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                  Learn more <ArrowRight size={12} />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
