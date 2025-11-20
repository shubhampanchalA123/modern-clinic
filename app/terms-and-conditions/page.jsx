export const metadata = {
  title: "Terms & Conditions | Modern Clinic",
  description:
    "Read the terms and conditions governing the use of Modern Clinic services.",
};

export default function TermsAndConditions() {
  return (
    <section className="bg-background min-h-screen py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Please read these terms carefully before using our clinic services or website.
            By accessing Modern Clinic, you agree to the points below.
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
              1. Medical Disclaimer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All homeopathic treatments are based on the information provided by you.
              Results may vary for each individual depending on medical conditions,
              lifestyle and adherence to treatment.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. User Responsibilities
            </h2>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>Share accurate medical history & reports</li>
              <li>Avoid self-medication using provided advice</li>
              <li>Use our website ethically and responsibly</li>
            </ul>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Consultation & Treatment Policies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Consultation fees are non-refundable.  
              Treatment plans are personalized and prepared by certified doctors.
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, logos, images and material on this website belong to
              Modern Clinic and cannot be used without permission.
            </p>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Contact for Queries
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
          This Terms & Conditions Policy was last updated on <span className="text-primary font-medium">
            {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </section>
  );
}
