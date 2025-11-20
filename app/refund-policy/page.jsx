export const metadata = {
  title: "Refund & Cancellation Policy | Modern Clinic",
  description:
    "Refund and cancellation policy for Modern Clinic — transparent, fair, and patient-friendly.",
};

export default function RefundPolicy() {
  return (
    <section className="bg-background min-h-screen py-16 px-6 md:px-12 lg:px-20">
      {/* PAGE WRAPPER */}
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground">
            Refund & Cancellation <span className="text-primary">Policy</span>
          </h1>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            We value your trust and aim to provide a transparent, smooth, and ethical
            experience with all our medical services. Please review our refund and
            cancellation terms below.
          </p>
        </div>

        {/* CARD STYLE SECTION */}
        <div className="
          bg-card border border-border shadow-sm 
          rounded-3xl p-8 md:p-10 
          space-y-10
        ">

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              1. Consultation Fees
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Payments made for doctor consultations (online or in-clinic) are 
              <span className="text-foreground font-medium"> non-refundable </span>
              once the appointment is confirmed.  
              This includes video calls, chat consultations, and follow-ups.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              2. Treatment Plans & Wellness Programs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Personalized treatment plans require detailed medical assessment and
              custom formulation by our doctors.  
              Hence, once the plan is created or shared, the fee is
              <span className="text-foreground font-medium"> non-refundable </span>.
            </p>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              3. Cancellation Window
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you wish to cancel your appointment, please contact us at least 
              <span className="text-foreground font-medium"> 12 hours before </span> 
              the scheduled time.  
              Cancellations beyond this window will not be eligible for a refund.
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              4. Missed Appointments / No-Show
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Refunds are not provided for missed appointments.  
              However, you may request a <span className="text-foreground font-medium">
              one-time rescheduling</span> based on doctor availability.
            </p>
          </div>

          {/* SECTION 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              5. Technical Issues (Online Consultations)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If your consultation fails due to a 
              <span className="text-foreground font-medium"> technical error </span>
              on our side, we will provide:
            </p>
            <ul className="text-muted-foreground list-disc pl-6 mt-2 space-y-1">
              <li>Free rescheduling of the consultation</li>
              <li>Alternative communication mode (voice/video)</li>
            </ul>
          </div>

          {/* SECTION 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              6. Payment Processing Time
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If a refund is approved under special cases, the amount may take
              <span className="text-foreground font-medium"> 5–7 business days </span>
              to reflect in your account depending on your bank/payment gateway.
            </p>
          </div>

          {/* SECTION 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              7. Contact for Refund Queries
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For refund-related questions, email us at:<br />
              <span className="text-primary font-medium">
                support@modernclinic.com
              </span>
            </p>
          </div>

        </div>

        {/* FOOT NOTE */}
        <p className="text-muted-foreground mt-10 text-sm text-center">
          This Refund Policy was last updated on 
          <span className="font-medium text-primary"> {new Date().getFullYear()} </span>.
        </p>
      </div>
    </section>
  );
}
