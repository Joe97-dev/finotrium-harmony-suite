import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Amina Osei",
    role: "CTO, MediCare Group",
    content: "Finotrium's hospital management system transformed our operations. Patient wait times dropped 40% and billing errors are virtually zero.",
    rating: 5,
  },
  {
    name: "James Kamau",
    role: "Director, EduFirst Schools",
    content: "Managing 12 campuses used to be chaos. Their school management platform unified everything — grades, fees, communication — in one place.",
    rating: 5,
  },
  {
    name: "Sarah Mwangi",
    role: "CEO, QuickLend Finance",
    content: "The loan management system handles thousands of applications daily. The M-Pesa integration for repayments was a game-changer for us.",
    rating: 5,
  },
];

const trustedBy = [
  "MediCare Group",
  "EduFirst Schools",
  "QuickLend Finance",
  "PropVault",
  "ShopAfrica",
  "County Gov. Nairobi",
];

const TestimonialsSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Trusted by leading organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {trustedBy.map((name) => (
              <span
                key={name}
                className="font-display font-bold text-lg text-primary/25 hover:text-primary/50 transition-colors duration-200 select-none"
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from organizations that trust Finotrium.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-200"
            >
              <Quote size={24} className="text-secondary/20 mb-4" />
              <p className="text-foreground text-sm leading-relaxed mb-6">
                "{t.content}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <div>
                <p className="font-display font-semibold text-primary text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
