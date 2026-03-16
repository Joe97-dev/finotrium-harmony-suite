import { motion } from "framer-motion";
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
  { icon: Building2, title: "Hospital Management", desc: "End-to-end patient care, billing, inventory and staff management." },
  { icon: GraduationCap, title: "School Management", desc: "Student records, grading, timetables, and parent communication." },
  { icon: Landmark, title: "Loan Management", desc: "Loan origination, repayment tracking, risk scoring and reporting." },
  { icon: BookOpen, title: "Library Management", desc: "Cataloguing, borrowing, returns, and digital resource access." },
  { icon: ShoppingCart, title: "E-Commerce System", desc: "Online storefronts, inventory, orders, and payment integration." },
  { icon: Home, title: "Property Management", desc: "Tenant management, rent collection, maintenance and reporting." },
  { icon: Globe, title: "Website Development", desc: "Custom, responsive websites built for performance and SEO." },
  { icon: Wrench, title: "Custom Systems", desc: "Bespoke management solutions tailored to your unique operations." },
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Management Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enterprise-grade systems engineered for reliability, security, and scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 border border-border"
            >
              <div className="w-10 h-10 rounded-md bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon size={20} className="text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
