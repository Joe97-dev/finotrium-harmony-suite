import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase">
            <Zap size={14} />
            Enterprise Solutions
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary leading-[1.1] mb-6">
            Management Systems{" "}
            <span className="text-gradient-accent">Built to Scale</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            From hospitals to schools, loans to e-commerce — we build robust, 
            scalable management technology that powers your operations.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg">
              Explore Solutions
              <ArrowRight size={16} />
            </Button>
            <Button variant="heroOutline" size="lg">
              Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
