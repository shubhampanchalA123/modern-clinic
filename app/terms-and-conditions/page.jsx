import Link from "next/link";
import { ChevronRight, ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Modern Clinic",
  description:
    "Read the terms and conditions governing the use of Modern Clinic services.",
};

export default function TermsAndConditions() {
  return (
    <div className="bg-background min-h-screen py-8 sm:py-14 px-4 sm:px-6 lg:px-8 text-foreground selection:bg-primary/20">
      <div className="max-w-4xl mx-auto">

        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Legal</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Terms & Conditions</span>
        </nav>

        {/* ================= HEADER ================= */}
        <div className="relative rounded-3.5xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-xl overflow-hidden mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Clinic Legal Agreements</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Terms &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          
          <p className="text-muted-foreground text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before utilizing our clinic services or digital tele-medicine portal.
          </p>
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="bg-card border border-border shadow-xl rounded-3.5xl p-6 sm:p-10 space-y-8 text-sm leading-relaxed">

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              1. Medical Disclaimer
            </h2>
            <p className="text-muted-foreground">
              All homeopathic treatments are based on individual consultations guided by Dr. Devendra Kumar Rathore. Results may vary for each patient depending on disease chronicity, genetic factors, lifestyle adherence, and constitutional responses.
            </p>
          </div>

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              2. Patient Responsibilities
            </h2>
            <ul className="text-muted-foreground list-disc pl-5 space-y-1.5 mt-2">
              <li>Provide accurate and complete medical history, lab diagnostics, and past medication records.</li>
              <li>Avoid unauthorized self-medication or abrupt cessation of vital emergency allopathic prescriptions without clinical supervision.</li>
              <li>Follow prescribed homeopathic dosages, storage guidelines (away from strong odors), and dietary roadmaps.</li>
            </ul>
          </div>

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              3. Consultation & Prescription Policies
            </h2>
            <p className="text-muted-foreground">
              Consultation fees cover the senior doctor's clinical review, case evaluation, and individualized prescription drafting. Once a consultation session is conducted or custom medicines are dispatched, fees are non-refundable.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              4. Contact & Dispute Resolution
            </h2>
            <p className="text-muted-foreground">
              For any questions regarding these terms, please contact our support desk at <span className="text-primary font-semibold">support@modernclinic.com</span> or call our helpline.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
