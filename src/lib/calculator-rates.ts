export interface RateRow {
  destination: string;
  fcl20ft: number;
  fcl40ft: number;
  lcl: number;
  air: number;
}

export const RATES: Record<string, RateRow> = {
  asean: {
    destination: "ASEAN Countries",
    fcl20ft: 800,
    fcl40ft: 1400,
    lcl: 45,
    air: 3.5,
  },
  east_asia: {
    destination: "East Asia (China, Japan, Korea)",
    fcl20ft: 1200,
    fcl40ft: 2100,
    lcl: 65,
    air: 5.2,
  },
  europe: {
    destination: "Europe",
    fcl20ft: 2200,
    fcl40ft: 3800,
    lcl: 120,
    air: 8.8,
  },
  north_america: {
    destination: "North America",
    fcl20ft: 2500,
    fcl40ft: 4300,
    lcl: 135,
    air: 9.5,
  },
  oceania: {
    destination: "Oceania",
    fcl20ft: 1800,
    fcl40ft: 3100,
    lcl: 95,
    air: 7.2,
  },
  south_asia: {
    destination: "South Asia & Middle East",
    fcl20ft: 1600,
    fcl40ft: 2800,
    lcl: 85,
    air: 6.5,
  },
};

export const DOCUMENTATION_FEE = 150;
export const FUEL_SURCHARGE_RATE = 0.15;

export type ShipmentType = "fcl20ft" | "fcl40ft" | "lcl" | "air";

export function calculateShipping(
  destinationKey: string,
  shipmentType: ShipmentType,
  quantity: number
) {
  const rate = RATES[destinationKey];
  if (!rate || !quantity || quantity <= 0) {
    return {
      baseFreight: 0,
      fuelSurcharge: 0,
      documentation: DOCUMENTATION_FEE,
      total: 0,
    };
  }

  const baseRate = rate[shipmentType];
  const baseFreight = baseRate * quantity;
  const fuelSurcharge = baseFreight * FUEL_SURCHARGE_RATE;
  const documentation = DOCUMENTATION_FEE;
  const total = baseFreight + fuelSurcharge + documentation;

  return {
    baseFreight,
    fuelSurcharge,
    documentation,
    total,
  };
}
