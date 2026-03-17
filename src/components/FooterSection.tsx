import logo from "@/assets/finotrium-logo-transparent.png";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-dark text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Finotrium" className="h-14 w-auto mb-4 rounded-md" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Enterprise management systems for Africa and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-secondary">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Hospital Management</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">School Management</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Loan Management</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">E-Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-secondary">More Solutions</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Property Management</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Library Management</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Custom Systems</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 uppercase tracking-wider text-secondary">Company</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li><a href="#why-us" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Finotrium. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
