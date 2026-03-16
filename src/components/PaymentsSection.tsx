import { motion } from "framer-motion";
import { Smartphone, CreditCard, Code, RefreshCw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    icon: Smartphone,
    title: "Mobile Money Integration",
    desc: "M-Pesa, Airtel Money, and more — reach every customer.",
  },
  {
    icon: CreditCard,
    title: "Card Payments",
    desc: "Visa, Mastercard, Verve — secure, fast card processing.",
  },
  {
    icon: Code,
    title: "Payment Gateway Solutions",
    desc: "Integrate Finotrium payments into your apps and websites.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Payments & Subscriptions",
    desc: "Ideal for SaaS and online services with automated billing.",
  },
];

const PaymentsSection = () => {
  return (
    <section id="payments" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 text-accent text-xs font-semibold mb-4 tracking-wide uppercase">
              Digital Payments
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Seamlessly Send & Receive Money
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Anytime, anywhere. Our payment infrastructure handles millions of transactions with 99.9% uptime.
            </p>

            <div className="space-y-5">
              {offerings.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary text-sm mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg border border-border p-8 shadow-card"
          >
            <h3 className="font-display font-bold text-primary text-xl mb-6">Why Finotrium Payments?</h3>
            <div className="space-y-4 mb-8">
              {[
                "PCI DSS Level 1 Compliant",
                "99.9% Transaction Uptime",
                "Real-time Settlement Reports",
                "Multi-currency Support",
                "Developer-friendly APIs",
                "24/7 Dedicated Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Button variant="accent" size="lg" className="w-full">
              Get API Keys
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsSection;
