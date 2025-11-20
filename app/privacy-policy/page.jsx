export const metadata = {
  title: "Privacy Policy | Modern Clinic",
  description:
    "Learn how Modern Clinic collects, protects and uses your personal medical information.",
};

export default function PrivacyPolicy() {
  return (
    <section className="bg-background min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Your privacy and medical confidentiality are extremely important to us.
            This policy explains how we collect, use, share, and protect your data.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="
          bg-card border border-border shadow-sm 
          rounded-3xl p-8 md:p-10 
          space-y-10
        ">

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect only what is necessary to provide medical services:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>Your name, age, gender</li>
              <li>Email & phone number</li>
              <li>Medical symptoms & history</li>
              <li>Uploaded reports (if any)</li>
              <li>Website usage analytics</li>
            </ul>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. How Your Data Is Used
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use your data responsibly for:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>Personalized treatment planning</li>
              <li>Contacting you for consultations</li>
              <li>Improving service quality</li>
              <li>Medical documentation</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Data Protection Guarantee
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is encrypted & securely stored.  
              We never sell or misuse your personal or medical details.
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Your Rights
            </h2>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>Right to access your data</li>
              <li>Right to request deletion</li>
              <li>Right to correct your information</li>
              <li>Right to withdraw consent</li>
            </ul>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Contact for Privacy Concerns
            </h2>
            <p className="text-muted-foreground">
              Email us at:{" "}
              <span className="text-primary font-medium">
                support@modernclinic.com
              </span>
            </p>
          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="text-muted-foreground mt-10 text-sm text-center">
          This Privacy Policy was last updated on <span className="text-primary font-medium">
            {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </section>
  );
}
