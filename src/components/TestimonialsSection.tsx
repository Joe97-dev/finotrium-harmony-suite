import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Amina Osei",
    role: "CTO, MediCare Group",
    content: "Finotrium's hospital management system transformed our operations. Patient wait times dropped 40% and billing errors are virtually zero.",
    rating: 5,
    initials: "AO",
  },
  {
    name: "James Kamau",
    role: "Director, EduFirst Schools",
    content: "Managing 12 campuses used to be chaos. Their school management platform unified everything — grades, fees, communication — in one place.",
    rating: 5,
    initials: "JK",
  },
  {
    name: "Sarah Mwangi",
    role: "CEO, QuickLend Finance",
    content: "The loan management system handles thousands of applications daily. The M-Pesa integration for repayments was a game-changer for us.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "Margaret Kairu",
    role: "CEO, Superdon Merchants",
    content: "The M-Pesa integration has made our cash lending operations incredibly easy and seamless. Managing disbursements and repayments is now effortless — Finotrium truly understands microfinance.",
    rating: 5,
    initials: "MK",
  },
];

const trustedBy = [
  "MediCare Group",
  "EduFirst Schools",
  "QuickLend Finance",
  "Superdon Merchants",
  "PropVault",
  "ShopAfrica",
  "County Gov. Nairobi",
];

const TestimonialsSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        {/* Trusted By - marquee style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display font-bold text-lg text-primary/20 hover:text-secondary transition-colors duration-300 select-none cursor-default"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from organizations that trust Finotrium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="bg-card rounded-lg p-7 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <Quote size={28} className="text-secondary/15 mb-4" />
              <p className="text-foreground text-sm leading-relaxed mb-6 flex-1">
                "{t.content}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-xs text-secondary">{t.initials}</span>
                </div>
                <div>
                  <p className="font-display font-semibold text-primary text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
