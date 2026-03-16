import logo from "@/assets/finotrium-logo.png";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-gradient-dark text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <img src={logo} alt="Finotrium" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Enterprise management systems and digital payment solutions for Africa and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hospital Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">School Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Loan Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Payments</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Mobile Money</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Card Payments</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Payment Gateway</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-primary-foreground/80">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Finotrium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
