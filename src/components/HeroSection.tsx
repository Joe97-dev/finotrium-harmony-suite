import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(hsl(var(--secondary)) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Management Systems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/10 text-secondary text-xs font-semibold mb-6 tracking-wide uppercase">
              <Zap size={14} />
              Enterprise Solutions
            </div>
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

          {/* Right - Payments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-dark rounded-lg p-8 text-primary-foreground">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/20 text-accent text-xs font-semibold mb-6 tracking-wide uppercase">
                <Shield size={14} />
                Digital Payments
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Send & Receive Money — Anywhere
              </h2>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Seamlessly integrate M-Pesa, Airtel Money, Visa, Mastercard and more 
                into your applications with our payment gateway.
              </p>

              {/* Code snippet preview */}
              <div className="bg-primary/40 rounded-md p-4 font-mono text-sm border border-primary-foreground/10">
                <div className="text-accent">// Initialize Finotrium Pay</div>
                <div className="text-primary-foreground/60">const payment = <span className="text-secondary">await</span> finotrium.<span className="text-accent">charge</span>({`{`}</div>
                <div className="text-primary-foreground/60 pl-4">amount: <span className="text-accent">5000</span>,</div>
                <div className="text-primary-foreground/60 pl-4">currency: <span className="text-secondary">"KES"</span>,</div>
                <div className="text-primary-foreground/60 pl-4">method: <span className="text-secondary">"mpesa"</span></div>
                <div className="text-primary-foreground/60">{`}`});</div>
              </div>

              <Button variant="accent" size="lg" className="mt-6">
                Start Accepting Payments
                <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
