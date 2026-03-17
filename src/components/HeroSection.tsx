import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Users, Briefcase, Award, TrendingUp, Building2, GraduationCap, Landmark, ShoppingCart, Home, Globe, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Active Clients" },
  { icon: Award, value: "99.9%", label: "System Uptime" },
  { icon: TrendingUp, value: "6+", label: "Years Experience" },
];

const slides = [
  { icon: Building2, title: "Hospital Management", desc: "Patient care, billing & staff management", color: "secondary" as const },
  { icon: GraduationCap, title: "School Management", desc: "Student records, grading & timetables", color: "accent" as const },
  { icon: Landmark, title: "Loan Management", desc: "Origination, repayment & risk scoring", color: "secondary" as const },
  { icon: ShoppingCart, title: "E-Commerce Systems", desc: "Storefronts, orders & payment integration", color: "accent" as const },
  { icon: Home, title: "Property Management", desc: "Tenants, rent collection & maintenance", color: "secondary" as const },
  { icon: Globe, title: "Website Development", desc: "Custom, responsive & SEO-optimized sites", color: "accent" as const },
  { icon: BookOpen, title: "Library Management", desc: "Cataloguing, borrowing & digital access", color: "secondary" as const },
  { icon: Wrench, title: "Custom Systems", desc: "Bespoke solutions for unique operations", color: "accent" as const },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, hsl(var(--secondary)), transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)), transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase"
            >
              <Zap size={14} />
              Enterprise Solutions
            </motion.div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary leading-[1.1] mb-6">
              Management Systems{" "}
              <span className="text-gradient-accent">Built to Scale</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              From hospitals to schools, loans to e-commerce — we build robust, 
              scalable management technology that powers your operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Explore Solutions
                <ArrowRight size={16} />
              </Button>
              <Button variant="heroOutline" size="lg">
                Book a Demo
              </Button>
            </div>
          </motion.div>

          {/* Right - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border/50">
              <img
                src={heroDashboard}
                alt="Finotrium management dashboard preview"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-card rounded-lg border border-border shadow-card-hover p-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                <TrendingUp size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Efficiency up</p>
                <p className="font-display font-bold text-primary text-sm">+40%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-card rounded-lg border border-border p-6 md:p-8 shadow-card"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <stat.icon size={20} className="text-secondary mx-auto mb-2" />
              <p className="font-display font-bold text-2xl md:text-3xl text-primary">{stat.value}</p>
              <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
