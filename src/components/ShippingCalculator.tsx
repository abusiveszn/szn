import { useState, useMemo } from "react";
import {
  calculateShipping,
  RATES,
  type ShipmentType,
} from "@/lib/calculator-rates";
import { ChevronDown } from "lucide-react";

const DESTINATION_OPTIONS = Object.entries(RATES).map(([key, row]) => ({
  value: key,
  label: row.destination,
}));

const SHIPMENT_OPTIONS: { value: ShipmentType; label: string }[] = [
  { value: "fcl20ft", label: "FCL 20ft Container" },
  { value: "fcl40ft", label: "FCL 40ft Container" },
  { value: "lcl", label: "LCL (per CBM)" },
  { value: "air", label: "Air Freight (per kg)" },
];

export default function ShippingCalculator() {
  const [destination, setDestination] = useState("");
  const [shipmentType, setShipmentType] = useState<ShipmentType>("fcl20ft");
  const [quantity, setQuantity] = useState("1");

  const result = useMemo(() => {
    const qty = parseFloat(quantity) || 0;
    return calculateShipping(destination, shipmentType, qty);
  }, [destination, shipmentType, quantity]);

  const formatCurrency = (val: number) => {
    return "S$ " + val.toLocaleString("en-US", { maximumFractionDigits: 0 });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
      {/* Form */}
      <div className="bg-navy-800 rounded-xl p-8 md:p-10 border border-navy-700">
        <div className="space-y-6">
          {/* Origin */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Origin
            </label>
            <div className="relative">
              <select
                disabled
                className="w-full bg-navy-900 border border-navy-700 rounded-md px-4 py-3.5 text-white appearance-none cursor-not-allowed opacity-70"
              >
                <option>Singapore</option>
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Destination Region
            </label>
            <div className="relative">
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-navy-900 border border-navy-700 rounded-md px-4 py-3.5 text-white appearance-none focus:border-amber-500 focus:outline-none transition-colors"
              >
                <option value="">Select destination</option>
                {DESTINATION_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Shipment Type */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Shipment Type
            </label>
            <div className="relative">
              <select
                value={shipmentType}
                onChange={(e) =>
                  setShipmentType(e.target.value as ShipmentType)
                }
                className="w-full bg-navy-900 border border-navy-700 rounded-md px-4 py-3.5 text-white appearance-none focus:border-amber-500 focus:outline-none transition-colors"
              >
                {SHIPMENT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Quantity / Weight{" "}
              <span className="text-slate-400 font-normal">
                (containers or kg/CBM)
              </span>
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="1"
              className="w-full bg-navy-900 border border-navy-700 rounded-md px-4 py-3.5 text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors"
            />
          </div>

          <p className="text-sm text-slate-500">
            Estimates include base freight, 15% fuel surcharge, and documentation
            fee. Final quote may vary.
          </p>
        </div>
      </div>

      {/* Result Panel */}
      <div className="bg-navy-800 rounded-xl p-8 md:p-10 border border-navy-700 flex flex-col">
        <div className="text-center mb-8">
          <div className="text-xs font-medium uppercase tracking-[0.5px] text-slate-400 mb-3">
            Estimated Cost
          </div>
          <div className="font-mono text-5xl md:text-[56px] font-bold text-white leading-none">
            <span className="text-amber-500">
              {formatCurrency(result.total)}
            </span>
          </div>
        </div>

        <div className="space-y-4 flex-1">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Base Freight</span>
            <span className="text-slate-300">
              {formatCurrency(result.baseFreight)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Fuel Surcharge (15%)</span>
            <span className="text-slate-300">
              {formatCurrency(result.fuelSurcharge)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Documentation</span>
            <span className="text-slate-300">
              {formatCurrency(result.documentation)}
            </span>
          </div>

          <div className="border-t border-navy-700 pt-4 mt-4">
            <div className="flex justify-between font-semibold">
              <span className="text-white">Total Estimate</span>
              <span className="text-white">
                {formatCurrency(result.total)}
              </span>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-8 block w-full bg-amber-500 hover:bg-amber-600 text-white text-center font-semibold py-4 rounded-md transition-colors duration-200"
        >
          Request Detailed Quote
        </a>
      </div>
    </div>
  );
}
