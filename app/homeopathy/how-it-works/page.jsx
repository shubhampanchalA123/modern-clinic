import HowItWorks from "./HowItWorks";

export default function Page() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold md:text-center mb-14">
          How <span className="text-primary">Homeopathy</span> Works
        </h1>

        <HowItWorks />
      </div>
    </section>
  );
}
