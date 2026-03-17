import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 17, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">1. Introduction</h2>
              <p>
                Finotrium ("we," "our," or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our management systems, visit our website, or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and job title provided through contact forms or account registration.</li>
                <li><strong>Business Data:</strong> Operational data processed through our management systems (hospital records, school data, loan information, etc.) as directed by our clients.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage analytics collected automatically when you visit our website.</li>
                <li><strong>Payment Information:</strong> Billing details processed securely through M-Pesa and other integrated payment gateways.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our management systems and services.</li>
                <li>To process transactions and send related billing information.</li>
                <li>To respond to inquiries, provide customer support, and send service updates.</li>
                <li>To monitor and analyze usage patterns for system performance and security.</li>
                <li>To comply with legal obligations and enforce our terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">4. Data Security</h2>
              <p>
                We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data. Our systems maintain 99.9% uptime with enterprise-grade infrastructure. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">5. Data Sharing & Third Parties</h2>
              <p>We do not sell your personal information. We may share data with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> Trusted partners who assist in operating our systems (e.g., cloud hosting, payment processing via M-Pesa).</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">6. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Client data processed through our management systems is retained according to individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access, update, or delete your personal information.</li>
                <li>Opt out of marketing communications.</li>
                <li>Request a copy of the data we hold about you.</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">8. Cookies</h2>
              <p>
                Our website uses cookies and similar tracking technologies to improve user experience and analyze site traffic. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us at{" "}
                <a href="mailto:privacy@finotrium.com" className="text-secondary hover:underline">privacy@finotrium.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default PrivacyPolicy;
