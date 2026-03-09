/**
 * carCatalog.ts
 * ─────────────
 * Hierarchical Brand → Model → Variant catalog.
 * Each variant carries its own specs so the form can auto-fill
 * horsepower, engine_cc, fuel_type and transmission on selection.
 *
 * price_multiplier is relative to the brand base price in the API
 * (e.g. 1.30 means the variant adds 30 % over the brand baseline).
 */

export interface Variant {
  name: string;
  horsepower: number;
  engine_cc: number;
  fuel_type: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  transmission: "Automatic" | "Manual";
  price_multiplier: number;
}

export interface CarModel {
  name: string;
  body_type: "Sedan" | "SUV" | "Hatchback" | "Coupe" | "Convertible" | "Truck" | "Crossover" | "Sports" | "MPV";
  variants: Variant[];
}

export type BrandCatalog = Record<string, CarModel[]>;

export const CAR_CATALOG: BrandCatalog = {
  Toyota: [
    {
      name: "Camry",
      body_type: "Sedan",
      variants: [
        { name: "LE",        horsepower: 203, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "SE",        horsepower: 203, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.07 },
        { name: "XSE",       horsepower: 301, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "XLE",       horsepower: 203, engine_cc: 2500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "TRD",       horsepower: 301, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
      ],
    },
    {
      name: "Corolla",
      body_type: "Sedan",
      variants: [
        { name: "L",         horsepower: 139, engine_cc: 1800, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.92 },
        { name: "LE",        horsepower: 139, engine_cc: 1800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "SE",        horsepower: 169, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.08 },
        { name: "XSE",       horsepower: 169, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.14 },
        { name: "XLE",       horsepower: 139, engine_cc: 1800, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
      ],
    },
    {
      name: "RAV4",
      body_type: "SUV",
      variants: [
        { name: "LE",        horsepower: 203, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "XLE",       horsepower: 203, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Adventure", horsepower: 203, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.16 },
        { name: "Hybrid XLE",horsepower: 219, engine_cc: 2500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Prime XSE", horsepower: 302, engine_cc: 2500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.30 },
      ],
    },
    {
      name: "Fortuner",
      body_type: "SUV",
      variants: [
        { name: "Base",      horsepower: 163, engine_cc: 2700, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.95 },
        { name: "4x2 MT",    horsepower: 163, engine_cc: 2700, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.00 },
        { name: "4x2 AT",    horsepower: 163, engine_cc: 2700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.08 },
        { name: "4x4 AT",    horsepower: 177, engine_cc: 2800, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "GR Sport",  horsepower: 204, engine_cc: 2800, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.35 },
      ],
    },
    {
      name: "Hilux",
      body_type: "Truck",
      variants: [
        { name: "Standard",  horsepower: 147, engine_cc: 2400, fuel_type: "Diesel",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "SR",        horsepower: 150, engine_cc: 2400, fuel_type: "Diesel",  transmission: "Manual",    price_multiplier: 1.00 },
        { name: "SR5",       horsepower: 204, engine_cc: 2800, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "Rogue",     horsepower: 204, engine_cc: 2800, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.25 },
        { name: "GR Sport",  horsepower: 224, engine_cc: 2800, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.38 },
      ],
    },
  ],

  Honda: [
    {
      name: "Civic",
      body_type: "Sedan",
      variants: [
        { name: "LX",        horsepower: 158, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.95 },
        { name: "Sport",     horsepower: 180, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.05 },
        { name: "EX",        horsepower: 180, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "EX-L",      horsepower: 180, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Touring",   horsepower: 180, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
      ],
    },
    {
      name: "Accord",
      body_type: "Sedan",
      variants: [
        { name: "LX",        horsepower: 192, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.95 },
        { name: "Sport",     horsepower: 192, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.05 },
        { name: "EX-L",      horsepower: 192, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.14 },
        { name: "Hybrid",    horsepower: 212, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Touring",   horsepower: 252, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.28 },
      ],
    },
    {
      name: "CR-V",
      body_type: "SUV",
      variants: [
        { name: "LX",        horsepower: 190, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.95 },
        { name: "EX",        horsepower: 190, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.08 },
        { name: "EX-L",      horsepower: 190, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.16 },
        { name: "Hybrid",    horsepower: 212, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "Touring",   horsepower: 212, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.30 },
      ],
    },
    {
      name: "City",
      body_type: "Sedan",
      variants: [
        { name: "Base",      horsepower: 119, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.88 },
        { name: "S",         horsepower: 119, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "V",         horsepower: 119, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Hybrid",    horsepower: 126, engine_cc: 1500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "RS Hybrid", horsepower: 126, engine_cc: 1500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.25 },
      ],
    },
  ],

  BMW: [
    {
      name: "3 Series",
      body_type: "Sedan",
      variants: [
        { name: "320i",      horsepower: 184, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.95 },
        { name: "330i",      horsepower: 255, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "330e",      horsepower: 292, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "M340i",     horsepower: 382, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.30 },
        { name: "M3",        horsepower: 503, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.65 },
      ],
    },
    {
      name: "5 Series",
      body_type: "Sedan",
      variants: [
        { name: "520i",      horsepower: 184, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "530i",      horsepower: 255, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "530e",      horsepower: 292, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "540i",      horsepower: 335, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "M5",        horsepower: 600, engine_cc: 4400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.80 },
      ],
    },
    {
      name: "X5",
      body_type: "SUV",
      variants: [
        { name: "xDrive40i", horsepower: 335, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "xDrive45e", horsepower: 394, engine_cc: 3000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "xDrive50i", horsepower: 456, engine_cc: 4400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.30 },
        { name: "M Competition",horsepower:625,engine_cc: 4400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.65 },
      ],
    },
    {
      name: "7 Series",
      body_type: "Sedan",
      variants: [
        { name: "740i",      horsepower: 335, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "745e",      horsepower: 394, engine_cc: 3000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "760i",      horsepower: 571, engine_cc: 6600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
        { name: "M760i",     horsepower: 601, engine_cc: 6600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.70 },
      ],
    },
  ],

  Mercedes: [
    {
      name: "C-Class",
      body_type: "Sedan",
      variants: [
        { name: "C180",      horsepower: 170, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "C200",      horsepower: 204, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "C300",      horsepower: 258, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "C300e",     horsepower: 313, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "AMG C43",   horsepower: 408, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.40 },
        { name: "AMG C63 S", horsepower: 510, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.75 },
      ],
    },
    {
      name: "E-Class",
      body_type: "Sedan",
      variants: [
        { name: "E200",      horsepower: 197, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "E300",      horsepower: 258, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "E350",      horsepower: 299, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "E300e",     horsepower: 320, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "AMG E53",   horsepower: 429, engine_cc: 3000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.45 },
        { name: "AMG E63 S", horsepower: 612, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.85 },
      ],
    },
    {
      name: "GLC",
      body_type: "SUV",
      variants: [
        { name: "GLC200",    horsepower: 204, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "GLC300",    horsepower: 258, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "GLC300e",   horsepower: 313, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "AMG GLC43", horsepower: 408, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.38 },
        { name: "AMG GLC63 S",horsepower:510, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.68 },
      ],
    },
    {
      name: "S-Class",
      body_type: "Sedan",
      variants: [
        { name: "S450",      horsepower: 367, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "S500",      horsepower: 429, engine_cc: 3000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "S580",      horsepower: 503, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.40 },
        { name: "Maybach S580",horsepower:503, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.80 },
        { name: "AMG S63",   horsepower: 612, engine_cc: 4000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 2.00 },
      ],
    },
  ],

  Audi: [
    {
      name: "A4",
      body_type: "Sedan",
      variants: [
        { name: "35 TFSI",   horsepower: 150, engine_cc: 1400, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "40 TFSI",   horsepower: 201, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "45 TFSI",   horsepower: 265, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "40 TDI",    horsepower: 204, engine_cc: 2000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "S4",        horsepower: 349, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
        { name: "RS 4",      horsepower: 450, engine_cc: 2900, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.80 },
      ],
    },
    {
      name: "Q5",
      body_type: "SUV",
      variants: [
        { name: "40 TFSI",   horsepower: 204, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.95 },
        { name: "45 TFSI",   horsepower: 261, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "55 TFSI e", horsepower: 367, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "40 TDI",    horsepower: 204, engine_cc: 2000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.05 },
        { name: "SQ5",       horsepower: 349, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.38 },
      ],
    },
    {
      name: "Q7",
      body_type: "SUV",
      variants: [
        { name: "45 TFSI",   horsepower: 249, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "55 TFSI",   horsepower: 335, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "60 TFSI e", horsepower: 456, engine_cc: 3000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "50 TDI",    horsepower: 286, engine_cc: 3000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 0.98 },
        { name: "SQ7",       horsepower: 507, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
      ],
    },
    {
      name: "e-tron",
      body_type: "SUV",
      variants: [
        { name: "50",        horsepower: 313, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.95 },
        { name: "55",        horsepower: 408, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "S",         horsepower: 503, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.28 },
        { name: "GT",        horsepower: 476, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.35 },
        { name: "GT RS",     horsepower: 598, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.65 },
      ],
    },
  ],

  Ford: [
    {
      name: "Mustang",
      body_type: "Sports",
      variants: [
        { name: "EcoBoost",  horsepower: 310, engine_cc: 2300, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "EcoBoost Premium",horsepower:310,engine_cc:2300,fuel_type:"Petrol", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "GT",        horsepower: 450, engine_cc: 5000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.18 },
        { name: "GT Premium",horsepower: 450, engine_cc: 5000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
        { name: "Mach 1",    horsepower: 480, engine_cc: 5000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.38 },
        { name: "Shelby GT500",horsepower:760,engine_cc:5200, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.80 },
      ],
    },
    {
      name: "F-150",
      body_type: "Truck",
      variants: [
        { name: "XL",        horsepower: 290, engine_cc: 3300, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.88 },
        { name: "XLT",       horsepower: 400, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Lariat",    horsepower: 400, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "King Ranch", horsepower:400, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
        { name: "Platinum",  horsepower: 400, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.32 },
        { name: "Raptor",    horsepower: 450, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.50 },
      ],
    },
    {
      name: "Explorer",
      body_type: "SUV",
      variants: [
        { name: "Base",      horsepower: 300, engine_cc: 2300, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "XLT",       horsepower: 300, engine_cc: 2300, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Limited",   horsepower: 300, engine_cc: 2300, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "ST",        horsepower: 400, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.28 },
        { name: "Platinum",  horsepower: 400, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.35 },
      ],
    },
    {
      name: "Bronco",
      body_type: "SUV",
      variants: [
        { name: "Base",      horsepower: 270, engine_cc: 2300, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.92 },
        { name: "Big Bend",  horsepower: 270, engine_cc: 2300, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.00 },
        { name: "Outer Banks",horsepower:330, engine_cc: 2700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "Wildtrak",  horsepower: 330, engine_cc: 2700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Raptor",    horsepower: 418, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
      ],
    },
  ],

  Tesla: [
    {
      name: "Model 3",
      body_type: "Sedan",
      variants: [
        { name: "Standard Range", horsepower: 272, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Long Range",     horsepower: 358, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Performance",    horsepower: 455, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.22 },
      ],
    },
    {
      name: "Model Y",
      body_type: "SUV",
      variants: [
        { name: "Standard Range", horsepower: 300, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Long Range",     horsepower: 384, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Performance",    horsepower: 456, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.18 },
      ],
    },
    {
      name: "Model S",
      body_type: "Sedan",
      variants: [
        { name: "Long Range",  horsepower: 670, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Plaid",       horsepower:1020, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.38 },
      ],
    },
    {
      name: "Model X",
      body_type: "SUV",
      variants: [
        { name: "Long Range",  horsepower: 670, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Plaid",       horsepower:1020, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.35 },
      ],
    },
    {
      name: "Cybertruck",
      body_type: "Truck",
      variants: [
        { name: "RWD",         horsepower: 315, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.90 },
        { name: "AWD",         horsepower: 600, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Cyberbeast",  horsepower: 845, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.30 },
      ],
    },
  ],

  Porsche: [
    {
      name: "Cayenne",
      body_type: "SUV",
      variants: [
        { name: "Base",        horsepower: 348, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.88 },
        { name: "S",           horsepower: 434, engine_cc: 2900, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "GTS",         horsepower: 473, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "Turbo",       horsepower: 541, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
        { name: "Turbo S E-Hybrid",horsepower:680,engine_cc:4000,fuel_type:"Hybrid",  transmission: "Automatic", price_multiplier: 1.75 },
      ],
    },
    {
      name: "911",
      body_type: "Sports",
      variants: [
        { name: "Carrera",     horsepower: 385, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Carrera S",   horsepower: 450, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Carrera 4S",  horsepower: 450, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Turbo",       horsepower: 572, engine_cc: 3700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
        { name: "Turbo S",     horsepower: 640, engine_cc: 3700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.70 },
        { name: "GT3",         horsepower: 510, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.60 },
        { name: "GT3 RS",      horsepower: 525, engine_cc: 4000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.85 },
      ],
    },
    {
      name: "Taycan",
      body_type: "Sedan",
      variants: [
        { name: "Base",        horsepower: 408, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.88 },
        { name: "4S",          horsepower: 563, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Turbo",       horsepower: 671, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.30 },
        { name: "Turbo S",     horsepower: 750, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.55 },
      ],
    },
  ],

  "Land Rover": [
    {
      name: "Discovery",
      body_type: "SUV",
      variants: [
        { name: "S",           horsepower: 249, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "SE",          horsepower: 296, engine_cc: 3000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "HSE",         horsepower: 306, engine_cc: 3000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "HSE Luxury",  horsepower: 355, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.28 },
        { name: "R-Dynamic HSE",horsepower:395, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.40 },
      ],
    },
    {
      name: "Range Rover",
      body_type: "SUV",
      variants: [
        { name: "S",           horsepower: 355, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.88 },
        { name: "SE",          horsepower: 395, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "HSE",         horsepower: 395, engine_cc: 3000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "Autobiography",horsepower:530, engine_cc: 4400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
        { name: "SV",          horsepower: 530, engine_cc: 4400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.65 },
      ],
    },
    {
      name: "Defender",
      body_type: "SUV",
      variants: [
        { name: "90 S",        horsepower: 295, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "110 S",       horsepower: 295, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "110 HSE",     horsepower: 395, engine_cc: 3000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "110 X",       horsepower: 523, engine_cc: 5000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.40 },
        { name: "V8",          horsepower: 525, engine_cc: 5000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.55 },
      ],
    },
  ],

  Lexus: [
    {
      name: "ES",
      body_type: "Sedan",
      variants: [
        { name: "ES 250",      horsepower: 203, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "ES 300h",     horsepower: 215, engine_cc: 2500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "ES 350",      horsepower: 302, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.08 },
        { name: "ES 350 F Sport", horsepower:302,engine_cc:3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "ES 350 Luxury",horsepower:302, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
      ],
    },
    {
      name: "RX",
      body_type: "SUV",
      variants: [
        { name: "RX 350",      horsepower: 295, engine_cc: 3500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "RX 350h",     horsepower: 246, engine_cc: 2500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "RX 500h F Sport",horsepower:371,engine_cc:2400, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "RX 500h F Sport Performance",horsepower:371,engine_cc:2400, fuel_type:"Hybrid", transmission:"Automatic", price_multiplier: 1.28 },
      ],
    },
    {
      name: "LX",
      body_type: "SUV",
      variants: [
        { name: "LX 600",      horsepower: 409, engine_cc: 3400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "LX 600 Sports",horsepower:409, engine_cc: 3400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "LX 600 Executive",horsepower:409,engine_cc:3400,fuel_type:"Petrol",  transmission: "Automatic", price_multiplier: 1.30 },
        { name: "LX 600 Ultra Luxury",horsepower:409,engine_cc:3400,fuel_type:"Petrol",transmission:"Automatic", price_multiplier: 1.45 },
      ],
    },
  ],

  Hyundai: [
    {
      name: "Elantra",
      body_type: "Sedan",
      variants: [
        { name: "SE",          horsepower: 147, engine_cc: 1600, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "SEL",         horsepower: 147, engine_cc: 1600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "N Line",      horsepower: 201, engine_cc: 1600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "Limited",     horsepower: 147, engine_cc: 1600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "N",           horsepower: 276, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.35 },
      ],
    },
    {
      name: "Tucson",
      body_type: "SUV",
      variants: [
        { name: "SE",          horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "SEL",         horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "N Line",      horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Hybrid SEL",  horsepower: 227, engine_cc: 1600, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Limited",     horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Plug-in Hybrid",horsepower:261,engine_cc: 1600, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.28 },
      ],
    },
    {
      name: "Palisade",
      body_type: "SUV",
      variants: [
        { name: "SE",          horsepower: 291, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "SEL",         horsepower: 291, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "XRT",         horsepower: 291, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.08 },
        { name: "Limited",     horsepower: 291, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Calligraphy", horsepower: 291, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.28 },
      ],
    },
  ],

  Kia: [
    {
      name: "Sportage",
      body_type: "SUV",
      variants: [
        { name: "LX",          horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "EX",          horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "EX Premium",  horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Hybrid",      horsepower: 227, engine_cc: 1600, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Plug-in Hybrid",horsepower:261,engine_cc:1600,  fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.28 },
        { name: "X-Line",      horsepower: 187, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
      ],
    },
    {
      name: "Sorento",
      body_type: "SUV",
      variants: [
        { name: "LX",          horsepower: 191, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.88 },
        { name: "S",           horsepower: 281, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.95 },
        { name: "EX",          horsepower: 281, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "SX",          horsepower: 281, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Plug-in Hybrid",horsepower:261,engine_cc:1600,  fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "X-Line SX Prestige",horsepower:281,engine_cc:2500,fuel_type:"Petrol", transmission:"Automatic", price_multiplier: 1.28 },
      ],
    },
    {
      name: "EV6",
      body_type: "Crossover",
      variants: [
        { name: "Standard Range RWD", horsepower: 168, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.88 },
        { name: "Long Range RWD",     horsepower: 225, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Long Range AWD",     horsepower: 321, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.12 },
        { name: "GT-Line",            horsepower: 321, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.20 },
        { name: "GT",                 horsepower: 576, engine_cc: 0, fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.45 },
      ],
    },
  ],

  Nissan: [
    {
      name: "Altima",
      body_type: "Sedan",
      variants: [
        { name: "S",           horsepower: 188, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "SV",          horsepower: 188, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "SR",          horsepower: 236, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "SL",          horsepower: 188, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Platinum",    horsepower: 236, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
      ],
    },
    {
      name: "X-Trail",
      body_type: "SUV",
      variants: [
        { name: "S",           horsepower: 149, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.88 },
        { name: "SV",          horsepower: 201, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "SL",          horsepower: 201, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "e-Power",     horsepower: 213, engine_cc: 1500, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Platinum",    horsepower: 201, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
      ],
    },
    {
      name: "GT-R",
      body_type: "Sports",
      variants: [
        { name: "Premium",     horsepower: 565, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Track Edition",horsepower:600, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "NISMO",       horsepower: 600, engine_cc: 3800, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.45 },
      ],
    },
  ],

  Volkswagen: [
    {
      name: "Golf",
      body_type: "Hatchback",
      variants: [
        { name: "Life",        horsepower: 110, engine_cc: 1000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.88 },
        { name: "Style",       horsepower: 150, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "R-Line",      horsepower: 150, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "GTI",         horsepower: 245, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.28 },
        { name: "GTI Clubsport",horsepower:300, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.42 },
        { name: "R",           horsepower: 315, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.55 },
      ],
    },
    {
      name: "Passat",
      body_type: "Sedan",
      variants: [
        { name: "Trendline",   horsepower: 150, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "Comfortline", horsepower: 150, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Highline",    horsepower: 190, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "GTE",         horsepower: 218, engine_cc: 1400, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "R-Line",      horsepower: 190, engine_cc: 2000, fuel_type: "Diesel",  transmission: "Automatic", price_multiplier: 1.15 },
      ],
    },
    {
      name: "ID.4",
      body_type: "SUV",
      variants: [
        { name: "Standard",    horsepower: 174, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Pro",         horsepower: 201, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Pro S",       horsepower: 201, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.12 },
        { name: "GTX",         horsepower: 299, engine_cc: 0,    fuel_type: "Electric", transmission: "Automatic", price_multiplier: 1.28 },
      ],
    },
  ],

  Mazda: [
    {
      name: "CX-5",
      body_type: "SUV",
      variants: [
        { name: "Sport",       horsepower: 187, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "Touring",     horsepower: 187, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Carbon Edition",horsepower:256,engine_cc:2500,  fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "Grand Touring",horsepower:256, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Signature",   horsepower: 256, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
        { name: "Grand Touring Reserve",horsepower:256,engine_cc:2500,fuel_type:"Diesel",transmission:"Automatic",price_multiplier:1.22},
      ],
    },
    {
      name: "Mazda 3",
      body_type: "Sedan",
      variants: [
        { name: "Sport",       horsepower: 155, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "Select",      horsepower: 155, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Preferred",   horsepower: 155, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Premium",     horsepower: 191, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
        { name: "Turbo",       horsepower: 227, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.30 },
      ],
    },
    {
      name: "MX-5 Miata",
      body_type: "Convertible",
      variants: [
        { name: "Sport",       horsepower: 181, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "Club",        horsepower: 181, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.00 },
        { name: "Grand Touring",horsepower:181, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "RF Club",     horsepower: 181, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.18 },
        { name: "RF Grand Touring",horsepower:181,engine_cc:2000,fuel_type:"Petrol",  transmission: "Automatic", price_multiplier: 1.25 },
      ],
    },
  ],

  Subaru: [
    {
      name: "Outback",
      body_type: "Crossover",
      variants: [
        { name: "Base",        horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Premium",     horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Limited",     horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "Onyx Edition XT",horsepower:260,engine_cc:2400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Touring XT",  horsepower: 260, engine_cc: 2400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.28 },
        { name: "Wilderness",  horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
      ],
    },
    {
      name: "Forester",
      body_type: "SUV",
      variants: [
        { name: "Base",        horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Premium",     horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Sport",       horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.08 },
        { name: "Limited",     horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "Touring",     horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "Wilderness",  horsepower: 182, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
      ],
    },
    {
      name: "WRX",
      body_type: "Sedan",
      variants: [
        { name: "Base",        horsepower: 271, engine_cc: 2400, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "Premium",     horsepower: 271, engine_cc: 2400, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.00 },
        { name: "Limited",     horsepower: 271, engine_cc: 2400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "GT",          horsepower: 271, engine_cc: 2400, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.20 },
        { name: "STI",         horsepower: 310, engine_cc: 2500, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.38 },
      ],
    },
  ],

  Jeep: [
    {
      name: "Wrangler",
      body_type: "SUV",
      variants: [
        { name: "Sport",       horsepower: 270, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.90 },
        { name: "Sport S",     horsepower: 270, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Sahara",      horsepower: 270, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "Rubicon",     horsepower: 285, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.28 },
        { name: "4xe",         horsepower: 375, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.35 },
        { name: "392",         horsepower: 470, engine_cc: 6400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.65 },
      ],
    },
    {
      name: "Grand Cherokee",
      body_type: "SUV",
      variants: [
        { name: "Laredo",      horsepower: 293, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.88 },
        { name: "Altitude",    horsepower: 293, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.95 },
        { name: "Limited",     horsepower: 293, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Trailhawk",   horsepower: 293, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Overland",    horsepower: 357, engine_cc: 5700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.20 },
        { name: "Summit",      horsepower: 357, engine_cc: 5700, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.30 },
        { name: "SRT",         horsepower: 475, engine_cc: 6400, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.50 },
        { name: "Trackhawk",   horsepower: 707, engine_cc: 6200, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.80 },
      ],
    },
  ],

  Chevrolet: [
    {
      name: "Malibu",
      body_type: "Sedan",
      variants: [
        { name: "LS",          horsepower: 163, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "RS",          horsepower: 163, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "LT",          horsepower: 163, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.08 },
        { name: "Premier",     horsepower: 163, engine_cc: 1500, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.18 },
      ],
    },
    {
      name: "Traverse",
      body_type: "SUV",
      variants: [
        { name: "LS",          horsepower: 310, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.88 },
        { name: "LT Cloth",    horsepower: 310, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "LT Leather",  horsepower: 310, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "RS",          horsepower: 310, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.15 },
        { name: "Premier",     horsepower: 310, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "High Country", horsepower:310, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.30 },
      ],
    },
    {
      name: "Camaro",
      body_type: "Coupe",
      variants: [
        { name: "LS",          horsepower: 275, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 0.85 },
        { name: "LT",          horsepower: 275, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "RS",          horsepower: 335, engine_cc: 3600, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.12 },
        { name: "SS",          horsepower: 455, engine_cc: 6200, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.30 },
        { name: "ZL1",         horsepower: 650, engine_cc: 6200, fuel_type: "Petrol",  transmission: "Manual",    price_multiplier: 1.65 },
      ],
    },
  ],

  Volvo: [
    {
      name: "XC60",
      body_type: "SUV",
      variants: [
        { name: "Momentum",    horsepower: 250, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "Inscription", horsepower: 250, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "R-Design",    horsepower: 300, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Recharge T8", horsepower: 455, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.28 },
        { name: "Polestar Engineered",horsepower:415,engine_cc:2000,fuel_type:"Hybrid",transmission:"Automatic", price_multiplier: 1.40 },
      ],
    },
    {
      name: "XC90",
      body_type: "SUV",
      variants: [
        { name: "Momentum",    horsepower: 250, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.90 },
        { name: "Inscription", horsepower: 300, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "R-Design",    horsepower: 300, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.10 },
        { name: "Recharge T8", horsepower: 455, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.25 },
        { name: "Excellence",  horsepower: 455, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.40 },
      ],
    },
    {
      name: "S90",
      body_type: "Sedan",
      variants: [
        { name: "Momentum",    horsepower: 250, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 0.92 },
        { name: "Inscription", horsepower: 300, engine_cc: 2000, fuel_type: "Petrol",  transmission: "Automatic", price_multiplier: 1.00 },
        { name: "Recharge",    horsepower: 455, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.22 },
        { name: "Ambience",    horsepower: 455, engine_cc: 2000, fuel_type: "Hybrid",  transmission: "Automatic", price_multiplier: 1.38 },
      ],
    },
  ],
};

/** Get all models for a given brand */
export function getModels(brand: string): CarModel[] {
  return CAR_CATALOG[brand] ?? [];
}

/** Get all variants for a given brand + model */
export function getVariants(brand: string, modelName: string): Variant[] {
  const model = (CAR_CATALOG[brand] ?? []).find((m) => m.name === modelName);
  return model?.variants ?? [];
}

/** Get a single variant's specs */
export function getVariantSpecs(brand: string, modelName: string, variantName: string): Variant | undefined {
  return getVariants(brand, modelName).find((v) => v.name === variantName);
}
