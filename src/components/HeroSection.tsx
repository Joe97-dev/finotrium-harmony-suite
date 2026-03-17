import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, Users, Briefcase, Award, TrendingUp, Building2, GraduationCap, Landmark, ShoppingCart, Home, Globe, Wrench, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

import hospitalImg from "@/assets/slides/hospital.jpg";
import schoolImg from "@/assets/slides/school.jpg";
import loanImg from "@/assets/slides/loan.jpg";
import ecommerceImg from "@/assets/slides/ecommerce.jpg";
import propertyImg from "@/assets/slides/property.jpg";
import websiteImg from "@/assets/slides/website.jpg";
import libraryImg from "@/assets/slides/library.jpg";
import customImg from "@/assets/slides/custom.jpg";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Active Clients" },
  { icon: Award, value: "99.9%", label: "System Uptime" },
  { icon: TrendingUp, value: "6+", label: "Years Experience" },
];

const slides = [
  { icon: Building2, title: "Hospital Management", desc: "Patient care, billing & staff management", color: "secondary" as const, image: hospitalImg },
  { icon: GraduationCap, title: "School Management", desc: "Student records, grading & timetables", color: "accent" as const, image: schoolImg },
  { icon: Landmark, title: "Loan Management", desc: "Origination, repayment & risk scoring", color: "secondary" as const, image: loanImg },
  { icon: ShoppingCart, title: "E-Commerce Systems", desc: "Storefronts, orders & payment integration", color: "accent" as const, image: ecommerceImg },
  { icon: Home, title: "Property Management", desc: "Tenants, rent collection & maintenance", color: "secondary" as const, image: propertyImg },
  { icon: Globe, title: "Website Development", desc: "Custom, responsive & SEO-optimized sites", color: "accent" as const, image: websiteImg },
  { icon: BookOpen, title: "Library Management", desc: "Cataloguing, borrowing & digital access", color: "secondary" as const, image: libraryImg },
  { icon: Wrench, title: "Custom Systems", desc: "Bespoke solutions for unique operations", color: "accent" as const, image: customImg },
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

          {/* Right - Animated slides */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border/50 bg-card aspect-[4/3]">
              {/* Slide header bar */}
              <div className="bg-primary px-5 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-accent/80" />
                  <div className="w-3 h-3 rounded-full bg-secondary/80" />
                </div>
                <span className="text-primary-foreground/60 text-xs font-mono ml-2">finotrium.com</span>
              </div>

              {/* Slide content */}
              <div className="relative h-full flex items-center justify-center p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex flex-col items-center text-center"
                  >
                    {(() => {
                      const slide = slides[currentSlide];
                      const iconBg = slide.color === "accent" ? "bg-accent/15" : "bg-secondary/15";
                      const iconColor = slide.color === "accent" ? "text-accent" : "text-secondary";
                      return (
                        <>
                          <div className={`w-20 h-20 rounded-2xl ${iconBg} flex items-center justify-center mb-5`}>
                            <slide.icon size={36} className={iconColor} />
                          </div>
                          <h3 className="font-display font-bold text-xl text-primary mb-2">{slide.title}</h3>
                          <p className="text-muted-foreground text-sm max-w-xs">{slide.desc}</p>
                        </>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>

                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentSlide ? "w-6 bg-secondary" : "w-1.5 bg-border hover:bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
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
