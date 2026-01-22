"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function OtherTreatmentPlan({
  selectedAddon = null,
  onChange,
  userType // "india" | "foreign"
}) {
  const { generalPlans, addonPlans } = useSelector(
    (state) => state.plans
  );

  const isIndia = userType === "india";
  const currency = isIndia ? "₹" : "$";

  const basePlan = generalPlans?.[0];

  const BASE_PRICE = isIndia
    ? basePlan?.prices?.india || 0
    : basePlan?.prices?.foreign || 0;

  // ✅ SINGLE ADDON STATE
  const [addon, setAddon] = useState(selectedAddon);
  const [activeAddon, setActiveAddon] = useState(null);

  // ✅ Toggle addon (only one allowed)
  function toggleAddon(addonItem) {
    setAddon((prev) =>
      prev && prev._id === addonItem._id ? null : addonItem
    );
  }

  const addonPrice = addon
    ? isIndia
      ? addon.prices?.india || 0
      : addon.prices?.foreign || 0
    : 0;

  const total = BASE_PRICE + addonPrice;

  useEffect(() => {
    if (basePlan) {
      onChange(addon ? [addon] : [], total, basePlan);
    }
  }, [addon, basePlan]);

  if (!basePlan) {
    return (
      <div className="text-center text-muted-foreground">
        No general plan available
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT — GENERAL PLAN */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-1">
            {basePlan.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4">
            {basePlan.description}
          </p>

          <div className="text-3xl font-bold text-primary mb-4">
            {currency}{BASE_PRICE}
          </div>

          <ul className="text-sm space-y-2">
            {basePlan.features?.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT — ADDON (SINGLE SELECT) */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            Add-on Treatment (Select One)
          </h4>

          <div
            className="space-y-4 overflow-y-auto pr-2"
            style={{ maxHeight: "320px" }}
          >
            {addonPlans.map((item) => {
              const price = isIndia
                ? item.prices?.india
                : item.prices?.foreign;

              const isAvailable = isIndia || item.prices?.foreign;
              const active = addon?._id === item._id;

              return (
                <div
                  key={item._id}
                  onClick={() => isAvailable && toggleAddon(item)}
                  className={`cursor-pointer border rounded-xl px-6 py-4 transition
                    ${
                      !isAvailable
                        ? "opacity-40 cursor-not-allowed"
                        : active
                        ? "border-primary bg-primary/10"
                        : "border-border hover:bg-secondary/20"
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-foreground">
                        {item.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="text-right">
                      {isAvailable ? (
                        <p className="font-bold text-lg">
                          {currency}{price}
                        </p>
                      ) : (
                        <p className="text-sm text-red-500">
                          Not available
                        </p>
                      )}

                      {isAvailable && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveAddon(item);
                          }}
                          className="text-xs text-muted-foreground underline"
                        >
                          More
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TOTAL */}
          <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
            <span className="text-lg font-semibold text-foreground">
              Total Payable
            </span>
            <span className="text-2xl font-bold text-primary">
              {currency}{total}
            </span>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {activeAddon && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-card rounded-2xl p-6 w-full max-w-md shadow-lg relative border border-border">
            <button
              onClick={() => setActiveAddon(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-foreground mb-2">
              {activeAddon.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              {activeAddon.description}
            </p>

            <ul className="text-sm space-y-2 mb-4">
              {activeAddon.features?.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-foreground">
                {currency}{
                  isIndia
                    ? activeAddon.prices?.india
                    : activeAddon.prices?.foreign
                }
              </span>

              <button
                onClick={() => setActiveAddon(null)}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
