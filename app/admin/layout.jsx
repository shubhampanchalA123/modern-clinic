export const metadata = {
  title: "Admin Panel | Hair Growth Clinic",
  description: "Internal admin panel for Hair Growth Clinic",
};

export default function AdminLayout({ children }) {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100">
      {children}
    </section>
  );
}
