"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Trash2, Edit2, Loader, Copy } from "lucide-react";
import {
  getAdminCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  clearAdminCouponState,
} from "@/redux/slices/adminCouponSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminCouponManagement() {
  const dispatch = useDispatch();
  const { coupons, loading, error, success } = useSelector((state) => state.adminCoupons);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    code: "",
    discount: 0,
    discountType: "PERCENTAGE", // PERCENTAGE or FIXED
    description: "",
    expiryDate: "",
  });
  const [formError, setFormError] = useState("");

  useEffect(() => {
    dispatch(getAdminCoupons());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setShowForm(false);
      setFormData({
        code: "",
        discount: 0,
        discountType: "PERCENTAGE",
        description: "",
        expiryDate: "",
      });
      setEditingId(null);
      dispatch(clearAdminCouponState());
      setTimeout(() => dispatch(getAdminCoupons()), 500);
    }
  }, [success, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    setFormError("");

    if (!formData.code.trim()) {
      setFormError("Coupon code wajib hai");
      return false;
    }

    if (formData.discount <= 0) {
      setFormError("Discount hona chahiye 0 se zyada");
      return false;
    }

    if (!formData.expiryDate) {
      setFormError("Expiry date select karo");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (editingId) {
        dispatch(updateCoupon({ couponId: editingId, couponData: formData }));
      } else {
        dispatch(createCoupon(formData));
      }
    } catch (err) {
      setFormError("Error saving coupon");
    }
  };

  const handleEdit = (coupon) => {
    setFormData({
      code: coupon.code,
      discount: coupon.discount,
      discountType: coupon.discountType,
      description: coupon.description || "",
      expiryDate: coupon.expiryDate?.split("T")[0] || "",
    });
    setEditingId(coupon._id);
    setShowForm(true);
  };

  const handleDelete = (couponId) => {
    if (confirm("Kya aap is coupon ko delete karna chahte ho?")) {
      dispatch(deleteCoupon(couponId));
    }
  };

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Coupon code copy ho gya!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Coupons Management</h2>
          <p className="mt-1 text-sm text-slate-400">Create aur manage karo discount coupons</p>
        </div>
        <Button
          onClick={() => {
            setShowForm(!showForm);
            if (showForm) {
              setEditingId(null);
              setFormData({
                code: "",
                discount: 0,
                discountType: "PERCENTAGE",
                description: "",
                expiryDate: "",
              });
            }
          }}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          {showForm ? "Cancel" : "New Coupon"}
        </Button>
      </div>

      {/* Form Section */}
      {showForm && (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h3 className="mb-4 text-lg font-semibold text-white">
            {editingId ? "Edit Coupon" : "Create New Coupon"}
          </h3>

          {formError && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {formError}
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-white">Coupon Code</Label>
                <Input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="e.g., SUMMER2024"
                  className="mt-2 bg-white/5 border-white/10 text-white uppercase"
                />
              </div>

              <div>
                <Label className="text-white">Discount Type</Label>
                <select
                  name="discountType"
                  value={formData.discountType}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white"
                >
                  <option value="PERCENTAGE">Percentage (%)</option>
                  <option value="FIXED">Fixed Amount (₹)</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-white">
                  {formData.discountType === "PERCENTAGE" ? "Discount %" : "Discount Amount"}
                </Label>
                <Input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  placeholder={formData.discountType === "PERCENTAGE" ? "20" : "500"}
                  className="mt-2 bg-white/5 border-white/10 text-white"
                  min="0"
                />
              </div>

              <div>
                <Label className="text-white">Expiry Date</Label>
                <Input
                  type="date"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  className="mt-2 bg-white/5 border-white/10 text-white"
                />
              </div>
            </div>

            <div>
              <Label className="text-white">Description</Label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Coupon ke baare mein details..."
                rows="2"
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-500"
              />
            </div>

            <Button type="submit" disabled={loading} className="w-full gap-2">
              {loading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                editingId ? "Update Coupon" : "Create Coupon"
              )}
            </Button>
          </form>
        </div>
      )}

      {/* Coupons List */}
      <div className="space-y-3">
        {loading && !coupons.length ? (
          <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
            <Loader className="h-5 w-5 animate-spin text-emerald-400" />
            <span className="ml-2 text-slate-300">Loading coupons...</span>
          </div>
        ) : coupons.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-slate-400">
            No coupons found. Create your first coupon to get started!
          </div>
        ) : (
          coupons.map((coupon) => {
            const isExpired = new Date(coupon.expiryDate) < new Date();
            return (
              <div
                key={coupon._id}
                className={`rounded-2xl border p-4 backdrop-blur sm:p-6 ${isExpired
                  ? "border-red-500/30 bg-red-500/5"
                  : "border-white/10 bg-white/5"
                  }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-white font-mono">{coupon.code}</h3>
                      <button
                        onClick={() => copyCouponCode(coupon.code)}
                        className="text-slate-400 hover:text-emerald-300 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${isExpired
                        ? "bg-red-500/15 text-red-300"
                        : "bg-emerald-500/15 text-emerald-300"
                        }`}>
                        {isExpired ? "Expired" : "Active"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{coupon.description}</p>
                    <div className="mt-3 grid gap-2 grid-cols-3 sm:gap-4">
                      <div>
                        <p className="text-xs text-slate-500">Discount</p>
                        <p className="text-sm font-medium text-emerald-300">
                          {coupon.discountType === "PERCENTAGE"
                            ? `${coupon.discount}%`
                            : `₹${coupon.discount}`}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Expires</p>
                        <p className="text-sm font-medium text-white">
                          {new Date(coupon.expiryDate).toLocaleDateString("en-IN")}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">Type</p>
                        <p className="text-sm font-medium text-blue-300">
                          {coupon.discountType}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 sm:flex-col">
                    <Button
                      onClick={() => handleEdit(coupon)}
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Edit2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Edit</span>
                    </Button>
                    <Button
                      onClick={() => handleDelete(coupon._id)}
                      variant="outline"
                      size="sm"
                      className="gap-2 text-red-400 border-red-400/30 hover:bg-red-400/10"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="hidden sm:inline">Delete</span>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
