import Link from "next/link";
import { ChevronRight, ShieldCheck, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Modern Clinic",
  description:
    "Refund and cancellation policy for Modern Clinic — transparent, fair, and patient-friendly.",
};

export default function RefundPolicy() {
  return (
    <div className="bg-background min-h-screen py-8 sm:py-14 px-4 sm:px-6 lg:px-8 text-foreground selection:bg-primary/20">
      <div className="max-w-4xl mx-auto">

        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-semibold">Legal</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-primary font-semibold">Refund Policy</span>
        </nav>

        {/* ================= HEADER ================= */}
        <div className="relative rounded-3.5xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-card via-card/90 to-primary/5 border border-border/80 shadow-xl overflow-hidden mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Fair & Transparent Terms</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Refund & Cancellation{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-muted-foreground text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            We value your trust and maintain clear, honest policies regarding our doctor consultations and custom formulations.
          </p>
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="bg-card border border-border shadow-xl rounded-3.5xl p-6 sm:p-10 space-y-8 text-sm leading-relaxed">

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              1. Consultation Fees
            </h2>
            <p className="text-muted-foreground">
              Payments made for scheduled appointments (video calls or in-clinic visits) are non-refundable once the appointment slot is confirmed and reserved with the doctor. Rescheduling is permitted with at least 4 hours prior notice.
            </p>
          </div>

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              2. Custom Formulations & Medication Dispatches
            </h2>
            <p className="text-muted-foreground">
              Personalized homeopathic potencies are custom-blended individually for each patient's specific constitutional requirement. Once a batch is formulated and dispatched from our clinical pharmacy, it cannot be refunded or returned.
            </p>
          </div>

          <div className="pb-6 border-b border-border/80">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              3. Damaged or Incorrect Package Deliveries
            </h2>
            <p className="text-muted-foreground">
              In the unlikely event of courier transit damage or seal breakage, please share photos within 48 hours of delivery. A replacement package will be dispatched immediately at zero additional charge.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">
              4. Support & Resolution Contact
            </h2>
            <p className="text-muted-foreground">
              For any billing inquiries, reach out to our patient support team at <span className="text-primary font-semibold">support@modernclinic.com</span> or via our official WhatsApp helpline.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
