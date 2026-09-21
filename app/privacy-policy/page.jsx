import Link from "next/link";
import { ChevronRight, ShieldCheck, Lock } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Modern Clinic",
  description:
    "Learn how Modern Clinic collects, protects and uses your personal medical information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen py-8 sm:py-14 px-4 sm:px-6 lg:px-8 text-foreground selection:bg-primary/20">
      <div className="max-w-4xl mx-auto">

        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Legal</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Privacy Policy</span>
        </nav>

        {/* ================= HEADER ================= */}
        <div className="relative rounded-3.5xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-xl overflow-hidden mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 mb-3">
            <Lock className="w-3.5 h-3.5" />
            <span>256-Bit Medical Confidentiality</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-muted-foreground text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Your medical confidentiality and electronic health data security are our highest clinical priorities.
          </p>
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="bg-card border border-border shadow-xl rounded-3.5xl p-6 sm:p-10 space-y-8 text-sm leading-relaxed">

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground">
              We collect only the minimum required clinical information necessary to provide accurate medical diagnoses:
            </p>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1.5 mt-2">
              <li>Patient name, age, contact information, and delivery address.</li>
              <li>Medical case history, symptoms, past prescriptions, and allergy notes.</li>
              <li>Uploaded diagnostic photographs and laboratory blood panel documents.</li>
            </ul>
          </div>

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              2. How Your Health Data Is Protected
            </h2>
            <p className="text-muted-foreground">
              All electronic records are encrypted and accessible strictly by registered doctors and clinical coordinators directly involved in your care. We never sell or share patient information with third-party advertisers.
            </p>
          </div>

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              3. Tele-Consultation Recordings & Records
            </h2>
            <p className="text-muted-foreground">
              Video consultations are conducted over secure, end-to-end encrypted medical communication channels to maintain complete doctor-patient privilege.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              4. Data Access & Deletion Requests
            </h2>
            <p className="text-muted-foreground">
              Patients may request a copy or deletion of their digital profile at any time by writing to <span className="text-primary font-semibold">privacy@modernclinic.com</span>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
