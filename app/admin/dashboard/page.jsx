"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart3, CalendarDays, FileText, Users, LogOut } from "lucide-react";
import axiosClient from "@/redux/axiosClient";
import AdminPlanManagement from "@/components/admin/AdminPlanManagement";
import AdminCouponManagement from "@/components/admin/AdminCouponManagement";
import { Button } from "@/components/ui/button";

const TABS = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "plans", label: "Plans", icon: FileText },
  { id: "coupons", label: "Coupons", icon: Users },
  { id: "consultant-users", label: "Consultant Users", icon: FileText },
  { id: "appointment-users", label: "Appointment Users", icon: CalendarDays },
];

const STAT_ICONS = {
  totalBookings: CalendarDays,
  totalAppointments: Users,
  totalUsers: FileText,
  totalCompletedOrders: BarChart3,
  totalCollectedAmount: BarChart3,
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [adminUser, setAdminUser] = useState(null);
  const [dashboardStats, setDashboardStats] = useState({
    totalBookings: 0,
    totalAppointments: 0,
    totalUsers: 0,
    totalCompletedOrders: 0,
    totalCollectedAmount: 0,
  });
  const [recentPayments, setRecentPayments] = useState([]);
  const [statsLoading, setStatsLoading] = useState(false);
  const [statsError, setStatsError] = useState("");

  const [usersData, setUsersData] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersError, setUsersError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsersApiKey = (tabId) => {
    if (tabId === "consultant-users") return "consultant";
    if (tabId === "appointment-users") return "appointment";
    return null;
  };

  useEffect(() => {
    const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    const user = typeof window !== "undefined" ? localStorage.getItem("adminUser") : null;
    if (user) {
      setAdminUser(JSON.parse(user));
    }

    const fetchStats = async () => {
      setStatsLoading(true);
      setStatsError("");

      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
        const res = await axiosClient.get("admin/dashboard/stats", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data?.success) {
          setDashboardStats(res.data.data);
          setRecentPayments(res.data.data.recentPayments || []);
        } else {
          setStatsError(res.data?.message || "Could not fetch dashboard stats.");
        }
      } catch (err) {
        setStatsError(err?.response?.data?.message || err?.message || "Could not fetch dashboard stats.");
      } finally {
        setStatsLoading(false);
      }
    };

    fetchStats();
    setReady(true);
  }, [router]);

  useEffect(() => {
    const apiKey = getUsersApiKey(activeTab);
    if (!apiKey) return;

    const fetchUsers = async () => {
      setUsersLoading(true);
      setUsersError("");
      try {
        const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
        const res = await axiosClient.get("admin/dashboard/users", {
          headers: { Authorization: `Bearer ${token}` },
          params: { key: apiKey },
        });

        if (res.data?.success) {
          setUsersData(res.data.data.users || []);
        } else {
          setUsersError(res.data?.message || "Could not fetch users list.");
        }
      } catch (err) {
        setUsersError(err?.response?.data?.message || err?.message || "Could not fetch users list.");
      } finally {
        setUsersLoading(false);
      }
    };

    fetchUsers();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    router.replace("/admin/login");
  };

  const overviewCards = [
    { label: "Total Bookings", value: dashboardStats.totalBookings, icon: STAT_ICONS.totalBookings },
    { label: "Total Appointments", value: dashboardStats.totalAppointments, icon: STAT_ICONS.totalAppointments },
    { label: "Total Users", value: dashboardStats.totalUsers, icon: STAT_ICONS.totalUsers },
    { label: "Completed Payments", value: dashboardStats.totalCompletedOrders, icon: STAT_ICONS.totalCompletedOrders },
    { label: "Total Collected", value: `₹ ${dashboardStats.totalCollectedAmount.toFixed(2)}`, icon: STAT_ICONS.totalCollectedAmount },
  ];

  if (!ready) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6 text-slate-300">
        Redirecting...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">Admin</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Dashboard</h1>
            <p className="mt-1 text-sm text-slate-400">
              {adminUser?.email && `Logged in as ${adminUser.email}`}
            </p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="gap-2 w-fit"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="mb-4 border-b border-white/10 pb-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Dashboard</h2>
            </div>
            <nav className="space-y-2">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium transition ${
                      activeTab === tab.id
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "text-slate-300 hover:bg-slate-700/40 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          <section className="space-y-6">
            {activeTab === "overview" && (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  {statsLoading ? (
                    <div className="col-span-full rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-slate-300">
                      Loading stats...
                    </div>
                  ) : statsError ? (
                    <div className="col-span-full rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-center text-red-300">
                      {statsError}
                    </div>
                  ) : (
                    overviewCards.map(({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                      >
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-slate-400">{label}</p>
                        <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
                      </div>
                    ))
                  )}
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <h2 className="text-lg font-semibold text-white">Recent Payments</h2>
                    {recentPayments.length === 0 ? (
                      <p className="mt-4 text-sm text-slate-400">No recent completed payments yet.</p>
                    ) : (
                      <div className="mt-4 space-y-3">
                        {recentPayments.slice(0, 8).map((item, i) => (
                          <div key={`${item.email}-${i}`} className="rounded-xl bg-slate-900/80 p-3">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-white">{item.name}</p>
                              <span className="text-xs text-emerald-300">₹ {item.amount?.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-slate-400">{item.email}</p>
                            <p className="mt-1 text-xs text-slate-500">{item.type} • {item.paymentStatus}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                    <h2 className="text-lg font-semibold text-white">Quick setup</h2>
                    <ul className="mt-4 space-y-2 text-xs text-slate-400">
                      <li>✓ Admin auth setup</li>
                      <li>✓ Token management</li>
                      <li>→ Plans management</li>
                      <li>→ Coupons management</li>
                    </ul>
                  </div>
                </div>
              </>
            )}

            {activeTab === "plans" && <AdminPlanManagement />}

            {activeTab === "coupons" && <AdminCouponManagement />}

            {(activeTab === "consultant-users" || activeTab === "appointment-users") && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {activeTab === "consultant-users" ? "Consultant Users" : "Appointment Users"}
                    </h2>
                    <p className="text-sm text-slate-400">
                      {activeTab === "consultant-users"
                        ? "Sirf userbooking data yahan show hoga."
                        : "Sirf appointment data yahan show hoga."}
                    </p>
                  </div>
                </div>

                {usersLoading ? (
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-slate-300">
                    Loading user list...
                  </div>
                ) : usersError ? (
                  <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-6 text-center text-red-300">
                    {usersError}
                  </div>
                ) : (
                  <>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <div className="mb-3 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-400">Total users matched</p>
                          <p className="text-2xl font-semibold text-white">{usersData.length}</p>
                        </div>
                        <p className="text-sm text-slate-400">Paid: {usersData.filter((u) => u.paymentStatus === 'completed').length}</p>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-slate-300">
                          <thead className="border-b border-white/10 text-xs uppercase tracking-widest text-slate-400">
                            <tr>
                              <th className="px-3 py-2">Name</th>
                              <th className="px-3 py-2">Email</th>
                              <th className="px-3 py-2">Phone</th>
                              <th className="px-3 py-2">Source</th>
                              <th className="px-3 py-2">Amount</th>
                              <th className="px-3 py-2">Payment</th>
                              <th className="px-3 py-2">Date</th>
                              <th className="px-3 py-2">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {usersData.map((user) => (
                              <tr key={user.id} className="border-b border-white/10">
                                <td className="px-3 py-2 text-white">{user.name}</td>
                                <td className="px-3 py-2">{user.email}</td>
                                <td className="px-3 py-2">{user.phone}</td>
                                <td className="px-3 py-2 capitalize">{user.source}</td>
                                <td className="px-3 py-2">₹ {user.amount?.toFixed(2) || '0.00'}</td>
                                <td className={`px-3 py-2 ${user.paymentStatus === 'completed' ? 'text-emerald-300' : 'text-amber-300'}`}>
                                  {user.paymentStatus}
                                </td>
                                <td className="px-3 py-2">{new Date(user.createdAt).toLocaleString()}</td>
                                <td className="px-3 py-2">
                                  <button
                                    className="rounded-md bg-emerald-500 px-3 py-1 text-xs font-semibold text-black hover:bg-emerald-400"
                                    onClick={() => setSelectedUser(user)}
                                  >
                                    View More
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {selectedUser && (
                      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-white">{selectedUser.name}'s Details</h3>
                          <button
                            className="text-xs text-slate-400 hover:text-white"
                            onClick={() => setSelectedUser(null)}
                          >
                            Close
                          </button>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-200">
                          <li><strong>Email:</strong> {selectedUser.email}</li>
                          <li><strong>Phone:</strong> {selectedUser.phone}</li>
                          <li><strong>Source:</strong> {selectedUser.source}</li>
                          <li><strong>Payment status:</strong> {selectedUser.paymentStatus}</li>
                          <li><strong>Payment method:</strong> {selectedUser.paymentMethod || 'N/A'}</li>
                          <li><strong>Amount:</strong> ₹ {selectedUser.amount?.toFixed(2) || '0.00'}</li>
                          <li><strong>Created at:</strong> {new Date(selectedUser.createdAt).toLocaleString()}</li>
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
