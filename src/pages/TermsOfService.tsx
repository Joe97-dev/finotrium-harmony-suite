import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-primary mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: March 17, 2026</p>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground/80 leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Finotrium's services, software, or website, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. These terms apply to all clients, users, and visitors.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">2. Services</h2>
              <p>
                Finotrium provides enterprise management technology solutions including but not limited to Hospital Management, School Management, Loan Management, E-Commerce, Property Management, Library Management, Website Development, and Custom Systems. Services are provided on a subscription or project basis as outlined in individual service agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">3. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You must provide accurate and complete information during registration.</li>
                <li>You are responsible for all activities that occur under your account.</li>
                <li>You must notify us immediately of any unauthorized use of your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">4. Payment Terms</h2>
              <p>
                Fees for our services are outlined in your service agreement. Payments can be made via M-Pesa, bank transfer, or other accepted methods. All fees are non-refundable unless otherwise stated in your agreement. Late payments may result in service suspension after a 14-day grace period.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">5. Intellectual Property</h2>
              <p>
                All software, designs, documentation, and content provided by Finotrium remain our intellectual property. Clients receive a non-exclusive, non-transferable license to use our systems for their intended purpose. Custom-developed features built specifically for a client are governed by the terms of their individual agreement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">6. Data Ownership</h2>
              <p>
                You retain ownership of all data you input into our systems. We process your data solely to provide our services. Upon termination of your agreement, you may request an export of your data within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">7. Service Level Agreement</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We commit to 99.9% system uptime for all hosted management solutions.</li>
                <li>Scheduled maintenance windows will be communicated at least 48 hours in advance.</li>
                <li>Technical support is available during business hours, with emergency support available 24/7 for critical issues.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">8. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use our systems for any unlawful purpose or in violation of any regulations.</li>
                <li>Attempt to gain unauthorized access to our systems or other users' data.</li>
                <li>Reverse engineer, decompile, or disassemble any of our software.</li>
                <li>Resell or redistribute our services without written authorization.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Finotrium shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by you in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">10. Termination</h2>
              <p>
                Either party may terminate the service agreement with 30 days' written notice. We reserve the right to suspend or terminate access immediately for violations of these terms. Upon termination, your right to use our systems ceases, and data export must be requested within 30 days.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">11. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes shall be resolved through arbitration in Nairobi, Kenya.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-primary mb-3">12. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@finotrium.com" className="text-secondary hover:underline">legal@finotrium.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default TermsOfService;
