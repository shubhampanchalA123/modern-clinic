export const metadata = {
  title: "Admin Panel | Hair Growth Clinic",
  description: "Internal admin panel for Hair Growth Clinic",
};

export default function AdminLayout({ children }) {
  return (
    <section className="min-h-screen bg-[#F7F9F8] text-[#1F2937] antialiased">
      {children}
    </section>
  );
}
