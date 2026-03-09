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

const A = "Automatic" as const;
const M = "Manual"    as const;
const P = "Petrol"    as const;
const D = "Diesel"    as const;
const E = "Electric"  as const;
const H = "Hybrid"    as const;

function v(name:string,hp:number,cc:number,fuel:Variant["fuel_type"],tr:Variant["transmission"],pm:number):Variant{
  return{name,horsepower:hp,engine_cc:cc,fuel_type:fuel,transmission:tr,price_multiplier:pm};
}

export const CAR_CATALOG: BrandCatalog = {

  // ─── TOYOTA ───────────────────────────────────────────────────────────────
  Toyota: [
    { name:"Camry",       body_type:"Sedan",    variants:[v("LE",203,2500,P,A,1.00),v("SE",203,2500,P,A,1.07),v("XSE V6",301,3500,P,A,1.18),v("XLE Hybrid",219,2500,H,A,1.15),v("TRD",301,3500,P,A,1.22)] },
    { name:"Corolla",     body_type:"Sedan",    variants:[v("L",139,1800,P,M,0.90),v("LE",139,1800,P,A,1.00),v("SE",169,2000,P,M,1.08),v("XSE",169,2000,P,A,1.14),v("XLE Hybrid",122,1800,H,A,1.18)] },
    { name:"Corolla Cross",body_type:"Crossover",variants:[v("L",169,2000,P,A,0.95),v("LE",169,2000,P,A,1.00),v("XLE",169,2000,P,A,1.10),v("Hybrid LE",196,2000,H,A,1.18)] },
    { name:"RAV4",        body_type:"SUV",      variants:[v("LE",203,2500,P,A,1.00),v("XLE",203,2500,P,A,1.10),v("Adventure",203,2500,P,A,1.16),v("Hybrid XLE",219,2500,H,A,1.20),v("Prime XSE",302,2500,H,A,1.30)] },
    { name:"Highlander",  body_type:"SUV",      variants:[v("L",265,3500,P,A,0.95),v("LE",265,3500,P,A,1.00),v("XLE",265,3500,P,A,1.10),v("Limited",265,3500,P,A,1.20),v("Hybrid Platinum",243,3500,H,A,1.30)] },
    { name:"4Runner",     body_type:"SUV",      variants:[v("SR5",270,4000,P,A,1.00),v("TRD Sport",270,4000,P,A,1.12),v("TRD Off-Road",270,4000,P,A,1.18),v("Limited",270,4000,P,A,1.25),v("TRD Pro",270,4000,P,A,1.35)] },
    { name:"Land Cruiser",body_type:"SUV",      variants:[v("GX",409,3400,P,A,1.00),v("VX",409,3400,P,A,1.15),v("ZX",409,3400,P,A,1.30),v("Heritage Edition",409,3400,P,A,1.25)] },
    { name:"Fortuner",    body_type:"SUV",      variants:[v("Base 4x2",163,2700,P,M,0.95),v("4x2 AT",163,2700,P,A,1.00),v("4x4 AT",177,2800,D,A,1.20),v("Legender",204,2800,D,A,1.28),v("GR Sport",204,2800,D,A,1.35)] },
    { name:"Prado",       body_type:"SUV",      variants:[v("TX",163,2700,P,M,0.95),v("TZ",204,2800,D,A,1.00),v("VX",204,2800,D,A,1.15),v("VXL",204,2800,D,A,1.28)] },
    { name:"Hilux",       body_type:"Truck",    variants:[v("Standard",150,2400,D,M,0.90),v("SR5",204,2800,D,A,1.00),v("Rogue",204,2800,D,A,1.15),v("GR Sport",224,2800,D,A,1.30)] },
    { name:"Tundra",      body_type:"Truck",    variants:[v("SR",381,3500,P,A,0.90),v("SR5",381,3500,P,A,1.00),v("Limited",437,3500,H,A,1.15),v("Platinum",437,3500,H,A,1.25),v("TRD Pro",437,3500,H,A,1.30),v("Capstone",437,3500,H,A,1.35)] },
    { name:"Tacoma",      body_type:"Truck",    variants:[v("SR",159,2700,P,M,0.88),v("SR5",278,3500,P,A,1.00),v("TRD Sport",278,3500,P,A,1.10),v("TRD Off-Road",278,3500,P,A,1.15),v("TRD Pro",278,3500,P,A,1.28),v("Limited",278,3500,P,A,1.20)] },
    { name:"Prius",       body_type:"Sedan",    variants:[v("L Eco",121,1800,H,A,0.95),v("LE",121,1800,H,A,1.00),v("XLE",121,1800,H,A,1.08),v("Limited",121,1800,H,A,1.15),v("Prime XSE",220,2000,H,A,1.22)] },
    { name:"Venza",       body_type:"Crossover",variants:[v("LE",219,2500,H,A,1.00),v("XLE",219,2500,H,A,1.10),v("Limited",219,2500,H,A,1.20)] },
    { name:"C-HR",        body_type:"Crossover",variants:[v("LE",144,2000,P,A,0.92),v("XLE",144,2000,P,A,1.00),v("XLE Premium",144,2000,P,A,1.10),v("Limited",144,2000,P,A,1.15)] },
    { name:"Sienna",      body_type:"MPV",      variants:[v("LE",245,2500,H,A,1.00),v("XLE",245,2500,H,A,1.10),v("XSE",245,2500,H,A,1.12),v("Limited",245,2500,H,A,1.20),v("Platinum",245,2500,H,A,1.28)] },
    { name:"Yaris",       body_type:"Hatchback",variants:[v("L",106,1500,P,M,0.85),v("LE",106,1500,P,A,0.92),v("XLE",106,1500,P,A,1.00)] },
    { name:"Avalon",      body_type:"Sedan",    variants:[v("XLE",301,3500,P,A,1.00),v("Touring",301,3500,P,A,1.10),v("Limited",301,3500,P,A,1.15),v("Hybrid XSE",215,2500,H,A,1.12)] },
    { name:"GR86",        body_type:"Coupe",    variants:[v("Base",228,2400,P,M,1.00),v("Premium",228,2400,P,A,1.10),v("GR",228,2400,P,M,1.18)] },
    { name:"GR Supra",    body_type:"Sports",   variants:[v("2.0",255,2000,P,A,1.00),v("3.0",382,3000,P,A,1.20),v("3.0 Premium",382,3000,P,A,1.30),v("A91-CF",382,3000,P,A,1.45)] },
    { name:"bZ4X",        body_type:"SUV",      variants:[v("FWD",201,0,E,A,1.00),v("AWD",214,0,E,A,1.12),v("Limited",214,0,E,A,1.20)] },
  ],

  // ─── HONDA ────────────────────────────────────────────────────────────────
  Honda: [
    { name:"Civic",       body_type:"Sedan",    variants:[v("LX",158,1500,P,M,0.95),v("Sport",180,1500,P,M,1.05),v("EX",180,1500,P,A,1.12),v("EX-L",180,1500,P,A,1.18),v("Touring",180,1500,P,A,1.25),v("Type R",315,2000,P,M,1.55)] },
    { name:"Accord",      body_type:"Sedan",    variants:[v("LX",192,1500,P,A,0.95),v("Sport",192,1500,P,M,1.05),v("EX-L",192,1500,P,A,1.14),v("Hybrid Sport",212,2000,H,A,1.20),v("Touring",252,2000,P,A,1.28)] },
    { name:"CR-V",        body_type:"SUV",      variants:[v("LX",190,1500,P,A,0.95),v("EX",190,1500,P,A,1.08),v("EX-L",190,1500,P,A,1.16),v("Hybrid",212,2000,H,A,1.22),v("Touring Hybrid",212,2000,H,A,1.30)] },
    { name:"HR-V",        body_type:"Crossover",variants:[v("LX",158,2000,P,A,0.90),v("Sport",158,2000,P,M,1.00),v("EX",158,2000,P,A,1.08),v("EX-L",158,2000,P,A,1.15)] },
    { name:"Pilot",       body_type:"SUV",      variants:[v("Sport",285,3500,P,A,0.95),v("EX-L",285,3500,P,A,1.00),v("TrailSport",285,3500,P,A,1.10),v("Elite",285,3500,P,A,1.18),v("Black Edition",285,3500,P,A,1.25)] },
    { name:"Passport",    body_type:"SUV",      variants:[v("Sport",280,3500,P,A,0.95),v("EX-L",280,3500,P,A,1.00),v("TrailSport",280,3500,P,A,1.10),v("Elite",280,3500,P,A,1.18)] },
    { name:"Ridgeline",   body_type:"Truck",    variants:[v("Sport",280,3500,P,A,0.95),v("RTL",280,3500,P,A,1.00),v("RTL-E",280,3500,P,A,1.10),v("Black Edition",280,3500,P,A,1.18)] },
    { name:"Odyssey",     body_type:"MPV",      variants:[v("LX",280,3500,P,A,0.90),v("EX",280,3500,P,A,1.00),v("EX-L",280,3500,P,A,1.10),v("Touring",280,3500,P,A,1.20),v("Elite",280,3500,P,A,1.28)] },
    { name:"City",        body_type:"Sedan",    variants:[v("Base",119,1500,P,M,0.88),v("S",119,1500,P,A,1.00),v("V",119,1500,P,A,1.10),v("Hybrid",126,1500,H,A,1.18),v("RS Hybrid",126,1500,H,A,1.25)] },
    { name:"Jazz / Fit",  body_type:"Hatchback",variants:[v("LX",128,1500,P,M,0.88),v("Sport",128,1500,P,A,0.95),v("EX",128,1500,P,A,1.00),v("EX-L",128,1500,P,A,1.08)] },
    { name:"BR-V",        body_type:"Crossover",variants:[v("S",119,1500,P,M,0.88),v("V",119,1500,P,A,1.00),v("V Sensing",119,1500,P,A,1.08)] },
    { name:"WR-V",        body_type:"Crossover",variants:[v("Base",121,1200,P,M,0.85),v("V",121,1200,P,A,0.95),v("RS",121,1200,P,A,1.00)] },
    { name:"e:N1",        body_type:"Crossover",variants:[v("Standard",204,0,E,A,1.00),v("Long Range",204,0,E,A,1.15)] },
    { name:"ZR-V",        body_type:"Crossover",variants:[v("Sport",190,1500,P,A,1.00),v("EX-L",190,1500,P,A,1.10),v("Hybrid",204,2000,H,A,1.20)] },
  ],

  // ─── BMW ──────────────────────────────────────────────────────────────────
  BMW: [
    { name:"1 Series",    body_type:"Hatchback",variants:[v("118i",136,1500,P,A,0.85),v("120i",178,2000,P,A,1.00),v("M135i",306,2000,P,A,1.30)] },
    { name:"2 Series",    body_type:"Coupe",    variants:[v("220i",184,2000,P,A,0.90),v("230i",255,2000,P,A,1.00),v("M240i",382,3000,P,A,1.25),v("M2",460,3000,P,M,1.55)] },
    { name:"3 Series",    body_type:"Sedan",    variants:[v("320i",184,2000,P,A,0.95),v("330i",255,2000,P,A,1.00),v("330e Hybrid",292,2000,H,A,1.12),v("M340i",382,3000,P,A,1.30),v("M3",503,3000,P,M,1.65)] },
    { name:"4 Series",    body_type:"Coupe",    variants:[v("420i",184,2000,P,A,0.92),v("430i",255,2000,P,A,1.00),v("M440i",374,3000,P,A,1.25),v("M4",503,3000,P,M,1.60)] },
    { name:"5 Series",    body_type:"Sedan",    variants:[v("520i",184,2000,P,A,0.90),v("530i",255,2000,P,A,1.00),v("530e Hybrid",292,2000,H,A,1.10),v("540i",335,3000,P,A,1.22),v("M5",600,4400,P,A,1.80)] },
    { name:"6 Series GT", body_type:"Sedan",    variants:[v("630i",258,2000,P,A,0.95),v("640i",335,3000,P,A,1.00),v("640d",265,3000,D,A,1.05)] },
    { name:"7 Series",    body_type:"Sedan",    variants:[v("740i",335,3000,P,A,0.95),v("745e Hybrid",394,3000,H,A,1.10),v("760i",571,6600,P,A,1.40),v("M760i",601,6600,P,A,1.65)] },
    { name:"8 Series",    body_type:"Coupe",    variants:[v("840i",335,3000,P,A,1.00),v("840d",320,3000,D,A,1.00),v("M850i",530,4400,P,A,1.35),v("M8",600,4400,P,A,1.70)] },
    { name:"X1",          body_type:"SUV",      variants:[v("xDrive18d",150,2000,D,A,0.88),v("sDrive20i",192,2000,P,A,1.00),v("xDrive28i",228,2000,P,A,1.10),v("M35i",312,2000,P,A,1.28)] },
    { name:"X2",          body_type:"Crossover",variants:[v("sDrive18i",136,1500,P,A,0.88),v("xDrive20i",192,2000,P,A,1.00),v("M35i",302,2000,P,A,1.25)] },
    { name:"X3",          body_type:"SUV",      variants:[v("xDrive20i",184,2000,P,A,0.92),v("xDrive30i",255,2000,P,A,1.00),v("xDrive30e",292,2000,H,A,1.12),v("M40i",382,3000,P,A,1.30),v("M Competition",503,3000,P,A,1.55)] },
    { name:"X4",          body_type:"Crossover",variants:[v("xDrive20i",184,2000,P,A,0.92),v("xDrive30i",255,2000,P,A,1.00),v("M40i",382,3000,P,A,1.28),v("M Competition",503,3000,P,A,1.52)] },
    { name:"X5",          body_type:"SUV",      variants:[v("xDrive40i",335,3000,P,A,1.00),v("xDrive45e Hybrid",394,3000,H,A,1.15),v("xDrive50i",456,4400,P,A,1.30),v("M Competition",625,4400,P,A,1.65)] },
    { name:"X6",          body_type:"Crossover",variants:[v("xDrive40i",335,3000,P,A,1.00),v("xDrive50i",456,4400,P,A,1.28),v("M Competition",625,4400,P,A,1.62)] },
    { name:"X7",          body_type:"SUV",      variants:[v("xDrive40i",335,3000,P,A,1.00),v("xDrive50e Hybrid",483,3000,H,A,1.18),v("M60i",530,4400,P,A,1.40)] },
    { name:"i4",          body_type:"Sedan",    variants:[v("eDrive35",286,0,E,A,1.00),v("eDrive40",335,0,E,A,1.10),v("xDrive40",396,0,E,A,1.18),v("M50",536,0,E,A,1.40)] },
    { name:"iX",          body_type:"SUV",      variants:[v("xDrive40",326,0,E,A,1.00),v("xDrive50",523,0,E,A,1.25),v("M60",619,0,E,A,1.50)] },
    { name:"Z4",          body_type:"Convertible",variants:[v("sDrive20i",197,2000,P,A,0.95),v("sDrive30i",255,2000,P,A,1.00),v("M40i",382,3000,P,A,1.35)] },
  ],

  // ─── MERCEDES ─────────────────────────────────────────────────────────────
  Mercedes: [
    { name:"A-Class",     body_type:"Hatchback",variants:[v("A180",136,1300,P,A,0.85),v("A200",163,1300,P,A,0.92),v("A250",224,2000,P,A,1.00),v("AMG A35",306,2000,P,A,1.28),v("AMG A45 S",421,2000,P,A,1.60)] },
    { name:"B-Class",     body_type:"MPV",      variants:[v("B180",136,1300,P,A,0.88),v("B200",163,1300,P,A,0.95),v("B250",224,2000,P,A,1.00),v("B250e Hybrid",218,1300,H,A,1.08)] },
    { name:"CLA",         body_type:"Coupe",    variants:[v("CLA180",136,1300,P,A,0.88),v("CLA200",163,1300,P,A,0.95),v("CLA250",224,2000,P,A,1.00),v("AMG CLA35",306,2000,P,A,1.30),v("AMG CLA45 S",421,2000,P,A,1.62)] },
    { name:"C-Class",     body_type:"Sedan",    variants:[v("C180",170,1500,P,A,0.90),v("C200",204,1500,P,A,1.00),v("C300",258,2000,P,A,1.12),v("C300e Hybrid",313,2000,H,A,1.22),v("AMG C43",408,2000,P,A,1.40),v("AMG C63 S",510,4000,P,A,1.75)] },
    { name:"CLS",         body_type:"Coupe",    variants:[v("CLS350",299,2000,P,A,1.00),v("CLS450 Hybrid",367,3000,H,A,1.18),v("AMG CLS53",435,3000,H,A,1.42)] },
    { name:"E-Class",     body_type:"Sedan",    variants:[v("E200",197,2000,P,A,0.90),v("E300",258,2000,P,A,1.00),v("E350",299,2000,P,A,1.12),v("E300e Hybrid",320,2000,H,A,1.20),v("AMG E53",429,3000,H,A,1.45),v("AMG E63 S",612,4000,P,A,1.85)] },
    { name:"S-Class",     body_type:"Sedan",    variants:[v("S450",367,3000,P,A,1.00),v("S500 Hybrid",429,3000,H,A,1.20),v("S580",503,4000,P,A,1.40),v("Maybach S580",503,4000,P,A,1.80),v("AMG S63",612,4000,H,A,2.00)] },
    { name:"GLA",         body_type:"Crossover",variants:[v("GLA180",136,1300,P,A,0.88),v("GLA200",163,1300,P,A,0.95),v("GLA250",224,2000,P,A,1.00),v("AMG GLA35",306,2000,P,A,1.25),v("AMG GLA45 S",421,2000,P,A,1.50)] },
    { name:"GLB",         body_type:"SUV",      variants:[v("GLB180",136,1300,P,A,0.88),v("GLB200",163,1300,P,A,0.95),v("GLB250",224,2000,P,A,1.00),v("AMG GLB35",306,2000,P,A,1.22)] },
    { name:"GLC",         body_type:"SUV",      variants:[v("GLC200",204,1500,P,A,0.92),v("GLC300",258,2000,P,A,1.00),v("GLC300e Hybrid",313,2000,H,A,1.15),v("AMG GLC43",408,3000,P,A,1.38),v("AMG GLC63 S",510,4000,P,A,1.68)] },
    { name:"GLE",         body_type:"SUV",      variants:[v("GLE300d",245,2000,D,A,0.95),v("GLE350",299,2000,P,A,1.00),v("GLE450 Hybrid",367,3000,H,A,1.18),v("AMG GLE53",435,3000,H,A,1.40),v("AMG GLE63 S",612,4000,P,A,1.75)] },
    { name:"GLS",         body_type:"SUV",      variants:[v("GLS450",362,3000,P,A,1.00),v("GLS580",489,4000,P,A,1.28),v("Maybach GLS600",550,4000,P,A,1.70),v("AMG GLS63",630,4000,P,A,1.85)] },
    { name:"G-Class",     body_type:"SUV",      variants:[v("G350d",286,3000,D,A,1.00),v("G500",422,4000,P,A,1.30),v("G580 EQ",587,0,E,A,1.45),v("AMG G63",577,4000,P,A,1.75),v("AMG G65",630,6000,P,A,2.20)] },
    { name:"AMG GT",      body_type:"Sports",   variants:[v("GT 43",367,3000,P,A,1.00),v("GT 53",435,3000,H,A,1.20),v("GT 63 S",630,4000,P,A,1.65),v("GT R Pro",577,4000,P,M,1.90)] },
    { name:"EQC",         body_type:"SUV",      variants:[v("EQC400",408,0,E,A,1.00),v("EQC400 AMG Line",408,0,E,A,1.12)] },
    { name:"EQS",         body_type:"Sedan",    variants:[v("EQS450",329,0,E,A,1.00),v("EQS580",516,0,E,A,1.22),v("AMG EQS53",761,0,E,A,1.58)] },
    { name:"SL",          body_type:"Convertible",variants:[v("SL43",381,2000,P,A,1.00),v("SL55",476,4000,P,A,1.30),v("SL63",585,4000,P,A,1.60)] },
  ],

  // ─── AUDI ─────────────────────────────────────────────────────────────────
  Audi: [
    { name:"A1",          body_type:"Hatchback",variants:[v("25 TFSI",95,1000,P,M,0.80),v("30 TFSI",116,1000,P,A,0.88),v("35 TFSI",150,1500,P,A,1.00),v("S1",231,2000,P,M,1.25)] },
    { name:"A3",          body_type:"Sedan",    variants:[v("30 TFSI",110,1000,P,A,0.85),v("35 TFSI",150,1500,P,A,1.00),v("40 TFSI e Hybrid",204,1400,H,A,1.15),v("45 TFSI",230,2000,P,A,1.18),v("S3",310,2000,P,A,1.38),v("RS 3",400,2500,P,A,1.65)] },
    { name:"A4",          body_type:"Sedan",    variants:[v("35 TFSI",150,1400,P,M,0.90),v("40 TFSI",201,2000,P,A,1.00),v("45 TFSI",265,2000,P,A,1.15),v("40 TDI",204,2000,D,A,1.10),v("S4",349,3000,P,A,1.45),v("RS 4",450,2900,P,A,1.80)] },
    { name:"A5",          body_type:"Coupe",    variants:[v("35 TFSI",150,1400,P,M,0.90),v("40 TFSI",204,2000,P,A,1.00),v("45 TFSI",265,2000,P,A,1.15),v("S5",354,3000,P,A,1.40),v("RS 5",450,2900,P,A,1.75)] },
    { name:"A6",          body_type:"Sedan",    variants:[v("40 TFSI",204,2000,P,A,0.92),v("45 TFSI",245,2000,P,A,1.00),v("55 TFSI e Hybrid",367,2000,H,A,1.18),v("50 TDI",286,3000,D,A,1.10),v("S6",444,2900,P,A,1.42),v("RS 6",600,4000,P,A,1.90)] },
    { name:"A7",          body_type:"Crossover",variants:[v("45 TFSI",245,2000,P,A,1.00),v("55 TFSI e Hybrid",367,2000,H,A,1.18),v("50 TDI",286,3000,D,A,1.10),v("S7",444,2900,P,A,1.40),v("RS 7",600,4000,P,A,1.85)] },
    { name:"A8",          body_type:"Sedan",    variants:[v("55 TFSI",340,3000,P,A,1.00),v("60 TFSI e Hybrid",449,3000,H,A,1.20),v("S8",571,4000,P,A,1.55),v("A8 L",340,3000,P,A,1.12)] },
    { name:"Q3",          body_type:"SUV",      variants:[v("35 TFSI",150,1500,P,A,0.90),v("40 TFSI",190,2000,P,A,1.00),v("45 TFSI e Hybrid",245,1400,H,A,1.15),v("RS Q3",400,2500,P,A,1.55)] },
    { name:"Q5",          body_type:"SUV",      variants:[v("40 TFSI",204,2000,P,A,0.95),v("45 TFSI",261,2000,P,A,1.00),v("55 TFSI e Hybrid",367,2000,H,A,1.20),v("SQ5",349,3000,P,A,1.38)] },
    { name:"Q7",          body_type:"SUV",      variants:[v("45 TFSI",249,2000,P,A,0.92),v("55 TFSI",335,3000,P,A,1.00),v("60 TFSI e Hybrid",456,3000,H,A,1.18),v("SQ7",507,4000,P,A,1.45)] },
    { name:"Q8",          body_type:"SUV",      variants:[v("55 TFSI",340,3000,P,A,1.00),v("60 TFSI e Hybrid",462,3000,H,A,1.18),v("SQ8",507,4000,P,A,1.40),v("RS Q8",600,4000,P,A,1.75)] },
    { name:"TT",          body_type:"Coupe",    variants:[v("45 TFSI",245,2000,P,A,1.00),v("TTS",320,2000,P,A,1.22),v("TTRS",400,2500,P,A,1.55)] },
    { name:"R8",          body_type:"Sports",   variants:[v("V10 RWD",570,5200,P,A,1.00),v("V10 Performance",620,5200,P,A,1.20),v("V10 GT",620,5200,P,A,1.35)] },
    { name:"e-tron",      body_type:"SUV",      variants:[v("50",313,0,E,A,0.95),v("55",408,0,E,A,1.00),v("S",503,0,E,A,1.28),v("GT",476,0,E,A,1.35),v("GT RS",598,0,E,A,1.65)] },
  ],

  // ─── FORD ─────────────────────────────────────────────────────────────────
  Ford: [
    { name:"Fiesta",      body_type:"Hatchback",variants:[v("S",95,1000,P,M,0.80),v("SE",120,1000,P,A,0.88),v("ST-Line",140,1500,P,M,0.95),v("ST",200,1500,P,M,1.15)] },
    { name:"Focus",       body_type:"Hatchback",variants:[v("SE",160,2000,P,A,0.88),v("SEL",160,2000,P,A,0.95),v("Titanium",160,2000,P,A,1.00),v("ST",280,2300,P,M,1.22),v("ST-X",280,2300,P,M,1.28)] },
    { name:"Fusion",      body_type:"Sedan",    variants:[v("S",175,2500,P,A,0.88),v("SE",175,2500,P,A,0.95),v("Titanium",245,2000,P,A,1.00),v("Hybrid",188,2000,H,A,1.05),v("Sport",325,2700,P,A,1.18)] },
    { name:"Mustang",     body_type:"Sports",   variants:[v("EcoBoost",310,2300,P,A,0.90),v("EcoBoost Premium",310,2300,P,A,1.00),v("GT",450,5000,P,M,1.18),v("GT Premium",450,5000,P,A,1.25),v("Mach 1",480,5000,P,M,1.38),v("Dark Horse",500,5000,P,M,1.50),v("Shelby GT500",760,5200,P,M,1.80)] },
    { name:"Mustang Mach-E",body_type:"SUV",   variants:[v("Select",266,0,E,A,0.92),v("Premium",290,0,E,A,1.00),v("GT",480,0,E,A,1.25),v("GT Performance",480,0,E,A,1.35)] },
    { name:"EcoSport",    body_type:"Crossover",variants:[v("S",123,1000,P,A,0.85),v("SE",166,2000,P,A,0.92),v("SES",166,2000,P,A,1.00),v("Titanium",166,2000,P,A,1.08)] },
    { name:"Escape",      body_type:"SUV",      variants:[v("S",180,1500,P,A,0.88),v("SE",180,1500,P,A,0.95),v("SEL",250,2000,P,A,1.00),v("Titanium",250,2000,P,A,1.08),v("Plug-In Hybrid",221,2500,H,A,1.15)] },
    { name:"Edge",        body_type:"SUV",      variants:[v("SE",250,2000,P,A,0.90),v("SEL",250,2000,P,A,1.00),v("Titanium",250,2000,P,A,1.10),v("ST",335,2700,P,A,1.25)] },
    { name:"Explorer",    body_type:"SUV",      variants:[v("Base",300,2300,P,A,0.90),v("XLT",300,2300,P,A,1.00),v("Limited",300,2300,P,A,1.15),v("ST",400,3000,P,A,1.28),v("Platinum",400,3000,P,A,1.35)] },
    { name:"Expedition",  body_type:"SUV",      variants:[v("XLT",380,3500,P,A,0.95),v("Limited",380,3500,P,A,1.00),v("King Ranch",380,3500,P,A,1.12),v("Platinum",380,3500,P,A,1.20),v("Timberline",380,3500,P,A,1.15)] },
    { name:"F-150",       body_type:"Truck",    variants:[v("XL",290,3300,P,A,0.88),v("XLT",400,3500,P,A,1.00),v("Lariat",400,3500,P,A,1.15),v("King Ranch",400,3500,P,A,1.25),v("Platinum",400,3500,P,A,1.32),v("Raptor",450,3500,P,A,1.50),v("Raptor R",700,5200,P,A,1.85)] },
    { name:"Ranger",      body_type:"Truck",    variants:[v("XL",270,2300,P,A,0.88),v("XLT",270,2300,P,A,1.00),v("Lariat",270,2300,P,A,1.12),v("Raptor",405,3000,P,A,1.40),v("Ranger Wildtrak",213,2000,D,A,1.15)] },
    { name:"Maverick",    body_type:"Truck",    variants:[v("XL Hybrid",191,2500,H,A,0.88),v("XLT",250,2000,P,A,0.95),v("Lariat",250,2000,P,A,1.00),v("Tremor",250,2000,P,A,1.10)] },
    { name:"Bronco",      body_type:"SUV",      variants:[v("Base",270,2300,P,M,0.92),v("Big Bend",270,2300,P,M,1.00),v("Outer Banks",330,2700,P,A,1.12),v("Wildtrak",330,2700,P,A,1.20),v("Badlands",330,2700,P,A,1.25),v("Raptor",418,3000,P,A,1.45)] },
    { name:"Bronco Sport",body_type:"Crossover",variants:[v("Base",181,1500,P,A,0.88),v("Big Bend",181,1500,P,A,0.95),v("Outer Banks",245,2000,P,A,1.00),v("Badlands",245,2000,P,A,1.10)] },
    { name:"GT",          body_type:"Sports",   variants:[v("Base",647,3500,P,A,1.00),v("Carbon Series",647,3500,P,A,1.25),v("Liquid Carbon",647,3500,P,A,1.50)] },
  ],

  // ─── TESLA ────────────────────────────────────────────────────────────────
  Tesla: [
    { name:"Model 3",    body_type:"Sedan",    variants:[v("Standard RWD",272,0,E,A,0.90),v("Long Range AWD",358,0,E,A,1.00),v("Performance",455,0,E,A,1.22)] },
    { name:"Model Y",    body_type:"SUV",      variants:[v("Standard RWD",300,0,E,A,0.90),v("Long Range AWD",384,0,E,A,1.00),v("Performance",456,0,E,A,1.18)] },
    { name:"Model S",    body_type:"Sedan",    variants:[v("Long Range",670,0,E,A,1.00),v("Plaid",1020,0,E,A,1.38)] },
    { name:"Model X",    body_type:"SUV",      variants:[v("Long Range",670,0,E,A,1.00),v("Plaid",1020,0,E,A,1.35)] },
    { name:"Cybertruck", body_type:"Truck",    variants:[v("RWD",315,0,E,A,0.90),v("AWD",600,0,E,A,1.00),v("Cyberbeast",845,0,E,A,1.30)] },
    { name:"Roadster",   body_type:"Convertible",variants:[v("Base",1000,0,E,A,1.00),v("Founder Series",1000,0,E,A,1.20)] },
  ],

  // ─── PORSCHE ──────────────────────────────────────────────────────────────
  Porsche: [
    { name:"911",        body_type:"Sports",   variants:[v("Carrera",385,3000,P,A,0.90),v("Carrera S",450,3000,P,A,1.00),v("Carrera 4S",450,3000,P,A,1.10),v("Targa 4S",450,3000,P,A,1.18),v("Turbo",572,3700,P,A,1.45),v("Turbo S",640,3700,P,A,1.70),v("GT3",510,4000,P,M,1.60),v("GT3 RS",525,4000,P,A,1.85)] },
    { name:"Cayenne",    body_type:"SUV",      variants:[v("Base",348,3000,P,A,0.88),v("S",434,2900,P,A,1.00),v("GTS",473,4000,P,A,1.22),v("Turbo",541,4000,P,A,1.45),v("Turbo S E-Hybrid",680,4000,H,A,1.75)] },
    { name:"Macan",      body_type:"SUV",      variants:[v("Base",261,2000,P,A,0.90),v("S",375,2900,P,A,1.00),v("GTS",440,2900,P,A,1.20),v("Turbo",440,2900,P,A,1.30),v("Electric",408,0,E,A,1.10)] },
    { name:"Panamera",   body_type:"Sedan",    variants:[v("Base",330,2900,P,A,0.88),v("4S",440,2900,P,A,1.00),v("GTS",480,4000,P,A,1.18),v("Turbo S E-Hybrid",700,4000,H,A,1.60),v("Turbo GT",640,4000,P,A,1.50)] },
    { name:"Taycan",     body_type:"Sedan",    variants:[v("Base",408,0,E,A,0.88),v("4S",563,0,E,A,1.00),v("Turbo",671,0,E,A,1.30),v("Turbo S",750,0,E,A,1.55),v("Turbo GT",1108,0,E,A,1.85)] },
    { name:"718 Cayman", body_type:"Coupe",    variants:[v("Base",300,2000,P,M,0.90),v("S",350,2500,P,M,1.00),v("GTS",400,4000,P,M,1.20),v("GT4",414,4000,P,M,1.35),v("GT4 RS",500,4000,P,A,1.55)] },
    { name:"718 Boxster",body_type:"Convertible",variants:[v("Base",300,2000,P,M,0.90),v("S",350,2500,P,M,1.00),v("GTS",400,4000,P,M,1.20),v("Spyder",414,4000,P,M,1.35)] },
  ],

  // ─── LAND ROVER ───────────────────────────────────────────────────────────
  "Land Rover": [
    { name:"Range Rover",        body_type:"SUV", variants:[v("S",355,3000,P,A,0.88),v("SE",395,3000,P,A,1.00),v("HSE",395,3000,D,A,1.12),v("Autobiography",530,4400,P,A,1.45),v("SV",530,4400,P,A,1.65)] },
    { name:"Range Rover Sport",  body_type:"SUV", variants:[v("S",355,3000,P,A,0.88),v("SE Dynamic",395,3000,P,A,1.00),v("HSE Dynamic",530,4400,P,A,1.20),v("SVR",575,5000,P,A,1.50)] },
    { name:"Range Rover Velar",  body_type:"SUV", variants:[v("S",247,2000,D,A,0.88),v("SE",250,2000,P,A,1.00),v("R-Dynamic HSE",395,3000,P,A,1.22),v("SV Autobiography",395,3000,P,A,1.35)] },
    { name:"Range Rover Evoque", body_type:"Crossover", variants:[v("S",246,2000,P,A,0.88),v("SE",246,2000,P,A,1.00),v("R-Dynamic HSE",246,2000,P,A,1.12),v("Bronze Collection",246,2000,P,A,1.08)] },
    { name:"Discovery",          body_type:"SUV", variants:[v("S",249,2000,P,A,0.90),v("SE",296,3000,D,A,1.00),v("HSE",306,3000,D,A,1.15),v("HSE Luxury",355,3000,P,A,1.28),v("R-Dynamic HSE",395,3000,P,A,1.40)] },
    { name:"Discovery Sport",    body_type:"SUV", variants:[v("S",200,2000,D,A,0.88),v("SE",246,2000,P,A,1.00),v("R-Dynamic HSE",246,2000,P,A,1.15),v("R-Dynamic SE",246,2000,P,A,1.08)] },
    { name:"Defender 90",        body_type:"SUV", variants:[v("S",295,2000,P,A,0.90),v("SE",295,2000,P,A,1.00),v("HSE",395,3000,P,A,1.18),v("X",523,5000,P,A,1.40),v("V8",525,5000,P,A,1.55)] },
    { name:"Defender 110",       body_type:"SUV", variants:[v("S",295,2000,P,A,0.90),v("SE",295,2000,P,A,1.00),v("HSE",395,3000,P,A,1.18),v("Carpathian Edition",395,3000,P,A,1.25),v("V8",525,5000,P,A,1.55)] },
    { name:"Defender 130",       body_type:"SUV", variants:[v("SE",395,3000,P,A,1.00),v("HSE",395,3000,P,A,1.12),v("X",523,5000,P,A,1.38)] },
  ],

  // ─── LEXUS ────────────────────────────────────────────────────────────────
  Lexus: [
    { name:"IS",   body_type:"Sedan",    variants:[v("IS 300",241,2000,P,A,0.92),v("IS 350",311,3500,P,A,1.00),v("IS 350 F Sport",311,3500,P,A,1.10),v("IS 500 F Sport",472,5000,P,A,1.35)] },
    { name:"ES",   body_type:"Sedan",    variants:[v("ES 250",203,2500,P,A,0.92),v("ES 300h Hybrid",215,2500,H,A,1.00),v("ES 350",302,3500,P,A,1.08),v("ES 350 F Sport",302,3500,P,A,1.18),v("ES 350 Ultra Luxury",302,3500,P,A,1.25)] },
    { name:"GS",   body_type:"Sedan",    variants:[v("GS 300",241,2000,P,A,0.92),v("GS 350",311,3500,P,A,1.00),v("GS 350 F Sport",311,3500,P,A,1.10),v("GS 450h Hybrid",338,3500,H,A,1.20)] },
    { name:"LS",   body_type:"Sedan",    variants:[v("LS 500",416,3500,P,A,1.00),v("LS 500h Hybrid",354,3500,H,A,1.10),v("LS 500 F Sport",416,3500,P,A,1.18),v("LS 500 Inspiration",416,3500,P,A,1.28)] },
    { name:"UX",   body_type:"Crossover",variants:[v("UX 200",168,2000,P,A,0.90),v("UX 250h Hybrid",181,2000,H,A,1.00),v("UX 300e Electric",201,0,E,A,1.05)] },
    { name:"NX",   body_type:"SUV",      variants:[v("NX 250",203,2500,P,A,0.92),v("NX 350h Hybrid",239,2500,H,A,1.00),v("NX 350 F Sport",275,2400,P,A,1.08),v("NX 450h+",306,2500,H,A,1.20)] },
    { name:"RX",   body_type:"SUV",      variants:[v("RX 350",295,3500,P,A,0.92),v("RX 350h Hybrid",246,2500,H,A,1.00),v("RX 500h F Sport",371,2400,H,A,1.18),v("RX 350h Premium",246,2500,H,A,1.10)] },
    { name:"GX",   body_type:"SUV",      variants:[v("GX 460 Premium",301,4600,P,A,0.95),v("GX 460 Luxury",301,4600,P,A,1.00),v("GX 460 Sport",301,4600,P,A,1.05),v("GX 550 Overtrail",349,3400,P,A,1.15),v("GX 550 Premium+",349,3400,P,A,1.22)] },
    { name:"LX",   body_type:"SUV",      variants:[v("LX 600",409,3400,P,A,1.00),v("LX 600 Sports",409,3400,P,A,1.15),v("LX 600 Executive",409,3400,P,A,1.30),v("LX 600 Ultra Luxury",409,3400,P,A,1.45)] },
    { name:"LC",   body_type:"Coupe",    variants:[v("LC 500",471,5000,P,A,1.00),v("LC 500 Convertible",471,5000,P,A,1.15),v("LC 500h Hybrid",354,3500,H,A,1.05)] },
    { name:"RC",   body_type:"Coupe",    variants:[v("RC 300",241,2000,P,A,0.92),v("RC 350",311,3500,P,A,1.00),v("RC 350 F Sport",311,3500,P,A,1.10),v("RC F",472,5000,P,A,1.40),v("RC F Track Edition",472,5000,P,A,1.55)] },
    { name:"RZ",   body_type:"SUV",      variants:[v("RZ 300e",204,0,E,A,0.95),v("RZ 450e",308,0,E,A,1.00)] },
  ],

  // ─── HYUNDAI ──────────────────────────────────────────────────────────────
  Hyundai: [
    { name:"Accent",     body_type:"Sedan",    variants:[v("SE",120,1600,P,M,0.85),v("SEL",120,1600,P,A,0.92),v("Limited",120,1600,P,A,1.00)] },
    { name:"Elantra",    body_type:"Sedan",    variants:[v("SE",147,1600,P,M,0.90),v("SEL",147,1600,P,A,1.00),v("N Line",201,1600,P,A,1.15),v("Limited",147,1600,P,A,1.12),v("N",276,2000,P,M,1.35)] },
    { name:"Sonata",     body_type:"Sedan",    variants:[v("SE",191,2500,P,A,0.92),v("SEL",191,2500,P,A,1.00),v("N Line",290,2500,P,A,1.15),v("Hybrid Blue",192,2000,H,A,1.08),v("Plug-in Hybrid",261,2000,H,A,1.18)] },
    { name:"i20",        body_type:"Hatchback",variants:[v("Era",83,1200,P,M,0.82),v("Active",100,1200,P,A,0.90),v("N Line",120,1000,P,A,0.98),v("N",204,1600,P,M,1.18)] },
    { name:"i30",        body_type:"Hatchback",variants:[v("SE",128,1000,P,A,0.88),v("Premium",158,1500,P,A,0.95),v("N Line",204,1600,P,A,1.00),v("N",280,2000,P,M,1.25)] },
    { name:"Venue",      body_type:"Crossover",variants:[v("SE",121,1600,P,M,0.85),v("SEL",121,1600,P,A,0.92),v("Limited",121,1600,P,A,1.00)] },
    { name:"Creta",      body_type:"SUV",      variants:[v("E",113,1500,P,M,0.85),v("S",138,1500,P,A,0.92),v("SX",138,1500,D,A,1.00),v("SX(O)",138,1500,D,A,1.08),v("N Line",158,1500,P,A,1.05)] },
    { name:"Tucson",     body_type:"SUV",      variants:[v("SE",187,2000,P,A,0.92),v("SEL",187,2000,P,A,1.00),v("N Line",187,2000,P,A,1.10),v("Hybrid SEL",227,1600,H,A,1.18),v("Limited",187,2000,P,A,1.20),v("Plug-in Hybrid",261,1600,H,A,1.28)] },
    { name:"Santa Fe",   body_type:"SUV",      variants:[v("SE",191,2500,P,A,0.90),v("SEL",191,2500,P,A,1.00),v("XRT",191,2500,P,A,1.08),v("Calligraphy",191,2500,P,A,1.18),v("Hybrid SEL",226,1600,H,A,1.15),v("Plug-in Hybrid",261,1600,H,A,1.25)] },
    { name:"Palisade",   body_type:"SUV",      variants:[v("SE",291,3800,P,A,0.90),v("SEL",291,3800,P,A,1.00),v("XRT",291,3800,P,A,1.08),v("Limited",291,3800,P,A,1.18),v("Calligraphy",291,3800,P,A,1.28)] },
    { name:"Kona",       body_type:"Crossover",variants:[v("SE",147,2000,P,A,0.88),v("SEL",147,2000,P,A,0.95),v("N Line",195,1600,P,A,1.00),v("Limited",147,2000,P,A,1.05),v("Electric",201,0,E,A,1.12)] },
    { name:"Ioniq 5",    body_type:"Crossover",variants:[v("Standard RWD",168,0,E,A,0.90),v("Long Range RWD",225,0,E,A,1.00),v("Long Range AWD",320,0,E,A,1.12),v("N",641,0,E,A,1.45)] },
    { name:"Ioniq 6",    body_type:"Sedan",    variants:[v("Standard RWD",149,0,E,A,0.90),v("Long Range RWD",225,0,E,A,1.00),v("Long Range AWD",320,0,E,A,1.12)] },
    { name:"Staria",     body_type:"MPV",      variants:[v("Smart",177,2200,D,A,0.90),v("Prime",177,2200,D,A,1.00),v("Lounge",177,2200,D,A,1.15)] },
    { name:"NEXO",       body_type:"SUV",      variants:[v("Blue",161,0,H,A,1.00),v("Limited",161,0,H,A,1.15)] },
  ],

  // ─── KIA ──────────────────────────────────────────────────────────────────
  Kia: [
    { name:"Rio",        body_type:"Hatchback",variants:[v("S",120,1600,P,M,0.85),v("LX",120,1600,P,A,0.92),v("S IVT",120,1600,P,A,1.00)] },
    { name:"Stonic",     body_type:"Crossover",variants:[v("K2",99,1000,P,M,0.85),v("K3",120,1400,P,A,0.92),v("GT-Line",120,1400,P,A,1.00)] },
    { name:"Soul",       body_type:"Crossover",variants:[v("LX",147,2000,P,A,0.88),v("S",147,2000,P,A,0.95),v("GT-Line",201,1600,P,A,1.00),v("EV",201,0,E,A,1.08)] },
    { name:"Seltos",     body_type:"SUV",      variants:[v("LX",146,2000,P,A,0.88),v("S",146,2000,P,A,0.95),v("EX",175,1600,P,A,1.00),v("SX",175,1600,P,A,1.08),v("X-Line",175,1600,P,A,1.05)] },
    { name:"Sportage",   body_type:"SUV",      variants:[v("LX",187,2000,P,A,0.92),v("EX",187,2000,P,A,1.00),v("EX Premium",187,2000,P,A,1.10),v("Hybrid",227,1600,H,A,1.18),v("Plug-in Hybrid",261,1600,H,A,1.28),v("X-Line",187,2000,P,A,1.15)] },
    { name:"Sorento",    body_type:"SUV",      variants:[v("LX",191,2500,P,A,0.88),v("S",281,2500,P,A,0.95),v("EX",281,2500,P,A,1.00),v("SX",281,2500,P,A,1.10),v("Plug-in Hybrid",261,1600,H,A,1.18),v("X-Line SX Prestige",281,2500,P,A,1.28)] },
    { name:"Telluride",  body_type:"SUV",      variants:[v("LX",291,3800,P,A,0.88),v("S",291,3800,P,A,0.95),v("EX",291,3800,P,A,1.00),v("SX",291,3800,P,A,1.10),v("X-Line SX Prestige",291,3800,P,A,1.25),v("X-Pro",291,3800,P,A,1.20)] },
    { name:"K5",         body_type:"Sedan",    variants:[v("LX",180,2500,P,A,0.90),v("LXS",180,2500,P,A,0.95),v("GT-Line",180,2500,P,A,1.00),v("EX",290,2500,P,A,1.12),v("GT",290,2500,P,A,1.20)] },
    { name:"Stinger",    body_type:"Sedan",    variants:[v("Premium",255,2000,P,A,1.00),v("GT-Line",300,3300,P,A,1.12),v("GT1",365,3300,P,A,1.22),v("GT2",365,3300,P,A,1.30)] },
    { name:"Carnival",   body_type:"MPV",      variants:[v("LX",290,3500,P,A,0.90),v("EX",290,3500,P,A,1.00),v("SX",290,3500,P,A,1.10),v("SX Prestige",290,3500,P,A,1.20)] },
    { name:"EV6",        body_type:"Crossover",variants:[v("Standard RWD",168,0,E,A,0.88),v("Long Range RWD",225,0,E,A,1.00),v("Long Range AWD",321,0,E,A,1.12),v("GT-Line",321,0,E,A,1.20),v("GT",576,0,E,A,1.45)] },
    { name:"EV9",        body_type:"SUV",      variants:[v("Standard RWD",215,0,E,A,0.90),v("Long Range RWD",218,0,E,A,1.00),v("Long Range AWD",379,0,E,A,1.15),v("GT-Line",379,0,E,A,1.22)] },
    { name:"Niro",       body_type:"Crossover",variants:[v("FE Hybrid",139,1600,H,A,0.88),v("LX Hybrid",139,1600,H,A,0.95),v("EX Hybrid",139,1600,H,A,1.00),v("Plug-in Hybrid",180,1600,H,A,1.08),v("EV",201,0,E,A,1.15)] },
  ],

  // ─── NISSAN ───────────────────────────────────────────────────────────────
  Nissan: [
    { name:"Versa",      body_type:"Sedan",    variants:[v("S",122,1600,P,M,0.82),v("SV",122,1600,P,A,0.90),v("SR",122,1600,P,A,0.95),v("SL",122,1600,P,A,1.00)] },
    { name:"Sentra",     body_type:"Sedan",    variants:[v("S",149,2000,P,A,0.88),v("SV",149,2000,P,A,0.95),v("SR",149,2000,P,A,1.00),v("SL",149,2000,P,A,1.08)] },
    { name:"Altima",     body_type:"Sedan",    variants:[v("S",188,2500,P,A,0.92),v("SV",188,2500,P,A,1.00),v("SR",236,2000,P,A,1.10),v("SL",188,2500,P,A,1.18),v("Platinum",236,2000,P,A,1.25)] },
    { name:"Maxima",     body_type:"Sedan",    variants:[v("S",300,3500,P,A,0.95),v("SV",300,3500,P,A,1.00),v("SR",300,3500,P,A,1.08),v("SL",300,3500,P,A,1.12),v("Platinum",300,3500,P,A,1.18)] },
    { name:"Note",       body_type:"Hatchback",variants:[v("E",98,1200,P,M,0.82),v("S",98,1200,P,A,0.88),v("e-Power",136,1200,H,A,0.95)] },
    { name:"Juke",       body_type:"Crossover",variants:[v("Visia",117,1000,P,A,0.85),v("Acenta",117,1000,P,A,0.92),v("N-Connecta",117,1000,P,A,0.98),v("Tekna",117,1000,P,A,1.05),v("N Sport",117,1000,P,A,1.00)] },
    { name:"Qashqai",    body_type:"Crossover",variants:[v("Visia",138,1300,P,A,0.88),v("Acenta",138,1300,P,A,0.95),v("N-Connecta",158,1300,P,A,1.00),v("Tekna",158,1300,P,A,1.08),v("e-Power",190,1500,H,A,1.12)] },
    { name:"X-Trail",    body_type:"SUV",      variants:[v("S",149,1500,P,M,0.88),v("SV",201,2500,P,A,1.00),v("SL",201,2500,P,A,1.12),v("e-Power",213,1500,H,A,1.20),v("Platinum",201,2500,P,A,1.22)] },
    { name:"Kicks",      body_type:"Crossover",variants:[v("S",122,1600,P,A,0.88),v("SV",122,1600,P,A,0.95),v("SR",122,1600,P,A,1.00),v("e-Power",136,1200,H,A,1.08)] },
    { name:"Murano",     body_type:"SUV",      variants:[v("S",260,3500,P,A,0.92),v("SV",260,3500,P,A,1.00),v("SL",260,3500,P,A,1.10),v("Platinum",260,3500,P,A,1.18)] },
    { name:"Pathfinder", body_type:"SUV",      variants:[v("S",284,3500,P,A,0.88),v("SV",284,3500,P,A,0.95),v("SL",284,3500,P,A,1.00),v("Rock Creek",284,3500,P,A,1.05),v("Platinum",284,3500,P,A,1.12)] },
    { name:"Armada",     body_type:"SUV",      variants:[v("S",400,5600,P,A,0.90),v("SV",400,5600,P,A,1.00),v("SL",400,5600,P,A,1.10),v("Platinum",400,5600,P,A,1.20)] },
    { name:"Frontier",   body_type:"Truck",    variants:[v("S",310,3800,P,M,0.88),v("SV",310,3800,P,A,0.95),v("PRO-4X",310,3800,P,A,1.00),v("PRO-X",310,3800,P,A,1.05),v("SL",310,3800,P,A,1.08)] },
    { name:"Titan",      body_type:"Truck",    variants:[v("S",400,5600,P,A,0.88),v("SV",400,5600,P,A,0.95),v("SL",400,5600,P,A,1.00),v("PRO-4X",400,5600,P,A,1.08),v("Platinum Reserve",400,5600,P,A,1.15)] },
    { name:"Leaf",       body_type:"Hatchback",variants:[v("S",147,0,E,A,0.88),v("SV Plus",214,0,E,A,1.00),v("SL Plus",214,0,E,A,1.12)] },
    { name:"Ariya",      body_type:"SUV",      variants:[v("Engage",238,0,E,A,0.90),v("Venture+",239,0,E,A,1.00),v("Evolve+",304,0,E,A,1.12),v("Empower+",389,0,E,A,1.22)] },
    { name:"GT-R",       body_type:"Sports",   variants:[v("Premium",565,3800,P,A,1.00),v("Track Edition",600,3800,P,A,1.20),v("NISMO",600,3800,P,A,1.45)] },
    { name:"Z",          body_type:"Sports",   variants:[v("Sport",400,3000,P,M,1.00),v("Performance",400,3000,P,A,1.08),v("Proto Spec",400,3000,P,M,1.15),v("NISMO",420,3000,P,M,1.28)] },
  ],

  // ─── VOLKSWAGEN ───────────────────────────────────────────────────────────
  Volkswagen: [
    { name:"Polo",       body_type:"Hatchback",variants:[v("Trendline",95,1000,P,M,0.80),v("Comfortline",110,1000,P,A,0.88),v("Highline",150,1500,P,A,0.95),v("GTI",207,2000,P,M,1.15),v("R",272,2000,P,A,1.28)] },
    { name:"Golf",       body_type:"Hatchback",variants:[v("Life",110,1000,P,M,0.88),v("Style",150,1500,P,A,1.00),v("R-Line",150,1500,P,A,1.10),v("GTI",245,2000,P,M,1.28),v("GTI Clubsport",300,2000,P,A,1.42),v("R",315,2000,P,A,1.55)] },
    { name:"Golf GTI",   body_type:"Hatchback",variants:[v("Base",245,2000,P,M,1.00),v("Performance",245,2000,P,A,1.10),v("Clubsport",300,2000,P,A,1.28),v("Clubsport 45",300,2000,P,A,1.38)] },
    { name:"Golf R",     body_type:"Hatchback",variants:[v("Base",315,2000,P,A,1.00),v("20 Years",333,2000,P,A,1.15)] },
    { name:"Passat",     body_type:"Sedan",    variants:[v("Trendline",150,1500,P,M,0.90),v("Comfortline",150,1500,P,A,1.00),v("Highline",190,2000,P,A,1.12),v("GTE Hybrid",218,1400,H,A,1.20),v("R-Line",190,2000,D,A,1.15)] },
    { name:"Arteon",     body_type:"Sedan",    variants:[v("Elegance",190,2000,P,A,0.95),v("R-Line",190,2000,P,A,1.00),v("Shooting Brake",272,2000,P,A,1.18),v("R",320,2000,P,A,1.35)] },
    { name:"T-Cross",    body_type:"Crossover",variants:[v("Trendline",95,1000,P,M,0.85),v("Comfortline",110,1000,P,A,0.92),v("Highline",150,1500,P,A,1.00)] },
    { name:"T-Roc",      body_type:"Crossover",variants:[v("Life",110,1000,P,A,0.88),v("Style",150,1500,P,A,1.00),v("R-Line",150,1500,P,A,1.10),v("Cabriolet",150,1500,P,A,1.18),v("R",300,2000,P,A,1.35)] },
    { name:"Tiguan",     body_type:"SUV",      variants:[v("Life",130,1500,P,A,0.88),v("Elegance",150,1500,P,A,1.00),v("R-Line",190,2000,P,A,1.10),v("Allspace",190,2000,P,A,1.05),v("R",320,2000,P,A,1.38)] },
    { name:"Touareg",    body_type:"SUV",      variants:[v("Elegance",231,2000,P,A,0.92),v("R-Line",286,3000,D,A,1.00),v("R Hybrid",462,3000,H,A,1.28),v("Black Edition",286,3000,D,A,1.10)] },
    { name:"Amarok",     body_type:"Truck",    variants:[v("TDI 200",204,2000,D,M,0.88),v("TDI 240",240,3000,D,A,1.00),v("V6 TDI",258,3000,D,A,1.10),v("PanAmericana",258,3000,D,A,1.18),v("Aventura",272,2000,P,A,1.22)] },
    { name:"ID.3",       body_type:"Hatchback",variants:[v("Pure",145,0,E,A,0.88),v("Pro",204,0,E,A,1.00),v("Pro S",204,0,E,A,1.12),v("Tour",204,0,E,A,1.18)] },
    { name:"ID.4",       body_type:"SUV",      variants:[v("Standard",174,0,E,A,0.90),v("Pro",201,0,E,A,1.00),v("Pro S",201,0,E,A,1.12),v("GTX",299,0,E,A,1.28)] },
    { name:"ID.5",       body_type:"Crossover",variants:[v("Pro",201,0,E,A,0.95),v("Pro S",201,0,E,A,1.08),v("GTX",299,0,E,A,1.25)] },
    { name:"ID.Buzz",    body_type:"MPV",      variants:[v("Pro",204,0,E,A,1.00),v("Pro LWB",250,0,E,A,1.15),v("GTX",340,0,E,A,1.30)] },
    { name:"Caddy",      body_type:"MPV",      variants:[v("Life",114,1500,P,A,0.88),v("Style",114,1500,P,A,0.95),v("California",114,1500,P,A,1.05)] },
  ],

  // ─── MAZDA ────────────────────────────────────────────────────────────────
  Mazda: [
    { name:"Mazda 2",    body_type:"Hatchback",variants:[v("Pure",90,1500,P,M,0.80),v("Evolve",90,1500,P,A,0.88),v("Evolve+",90,1500,P,A,0.92),v("GT",90,1500,P,A,1.00)] },
    { name:"Mazda 3",    body_type:"Sedan",    variants:[v("Sport",155,2000,P,M,0.90),v("Select",155,2000,P,A,1.00),v("Preferred",155,2000,P,A,1.10),v("Premium",191,2500,P,A,1.18),v("Turbo",227,2500,P,A,1.30)] },
    { name:"Mazda 6",    body_type:"Sedan",    variants:[v("Sport",187,2500,P,A,0.92),v("Touring",187,2500,P,A,1.00),v("Grand Touring",187,2500,P,A,1.10),v("Signature",227,2500,P,A,1.20),v("Turbo",227,2500,P,A,1.18)] },
    { name:"CX-3",       body_type:"Crossover",variants:[v("Sport",148,2000,P,A,0.88),v("Touring",148,2000,P,A,0.95),v("Grand Touring",148,2000,P,A,1.00)] },
    { name:"CX-30",      body_type:"Crossover",variants:[v("Select",186,2500,P,A,0.92),v("Preferred",186,2500,P,A,1.00),v("Premium",186,2500,P,A,1.10),v("Turbo",227,2500,P,A,1.22)] },
    { name:"CX-5",       body_type:"SUV",      variants:[v("Sport",187,2500,P,A,0.92),v("Touring",187,2500,P,A,1.00),v("Carbon Edition",256,2500,P,A,1.12),v("Grand Touring",256,2500,P,A,1.18),v("Signature",256,2500,P,A,1.25)] },
    { name:"CX-50",      body_type:"SUV",      variants:[v("Select",187,2500,P,A,0.92),v("Preferred",187,2500,P,A,1.00),v("Premium",187,2500,P,A,1.10),v("Turbo",256,2500,P,A,1.22),v("Meridian Edition",256,2500,P,A,1.28)] },
    { name:"CX-60",      body_type:"SUV",      variants:[v("Takumi",254,3300,D,A,0.95),v("Homura",254,3300,D,A,1.00),v("PHEV",327,2500,H,A,1.15),v("PHEV Takumi",327,2500,H,A,1.25)] },
    { name:"CX-90",      body_type:"SUV",      variants:[v("Select",280,3300,P,A,0.90),v("Preferred",280,3300,P,A,1.00),v("Premium",280,3300,P,A,1.10),v("PHEV Premium",323,2500,H,A,1.20),v("PHEV Signature",323,2500,H,A,1.30)] },
    { name:"MX-5 Miata", body_type:"Convertible",variants:[v("Sport",181,2000,P,M,0.90),v("Club",181,2000,P,M,1.00),v("Grand Touring",181,2000,P,A,1.12),v("RF Club",181,2000,P,M,1.18),v("RF Grand Touring",181,2000,P,A,1.25)] },
    { name:"MX-30",      body_type:"Crossover",variants:[v("Base",143,0,E,A,0.92),v("Premium",143,0,E,A,1.00),v("R-EV",170,800,H,A,1.12)] },
  ],

  // ─── SUBARU ───────────────────────────────────────────────────────────────
  Subaru: [
    { name:"Impreza",    body_type:"Hatchback",variants:[v("Base",152,2000,P,A,0.88),v("Premium",152,2000,P,A,0.95),v("Sport",152,2000,P,A,1.00),v("Limited",152,2000,P,A,1.08)] },
    { name:"Legacy",     body_type:"Sedan",    variants:[v("Base",182,2500,P,A,0.88),v("Premium",182,2500,P,A,0.95),v("Sport",260,2400,P,A,1.00),v("Limited",182,2500,P,A,1.08),v("Touring XT",260,2400,P,A,1.15)] },
    { name:"Crosstrek",  body_type:"Crossover",variants:[v("Base",152,2000,P,A,0.88),v("Premium",152,2000,P,A,0.95),v("Sport",182,2500,P,A,1.00),v("Limited",182,2500,P,A,1.08),v("Wilderness",182,2500,P,A,1.12),v("Hybrid",148,2000,H,A,1.05)] },
    { name:"Forester",   body_type:"SUV",      variants:[v("Base",182,2500,P,A,0.90),v("Premium",182,2500,P,A,1.00),v("Sport",182,2500,P,A,1.08),v("Limited",182,2500,P,A,1.15),v("Touring",182,2500,P,A,1.22),v("Wilderness",182,2500,P,A,1.18)] },
    { name:"Outback",    body_type:"Crossover",variants:[v("Base",182,2500,P,A,0.90),v("Premium",182,2500,P,A,1.00),v("Limited",182,2500,P,A,1.12),v("Onyx Edition XT",260,2400,P,A,1.20),v("Touring XT",260,2400,P,A,1.28),v("Wilderness",182,2500,P,A,1.22)] },
    { name:"Ascent",     body_type:"SUV",      variants:[v("Base",260,2400,P,A,0.90),v("Premium",260,2400,P,A,1.00),v("Limited",260,2400,P,A,1.10),v("Touring",260,2400,P,A,1.18),v("Onyx Edition",260,2400,P,A,1.08)] },
    { name:"WRX",        body_type:"Sedan",    variants:[v("Base",271,2400,P,M,0.90),v("Premium",271,2400,P,M,1.00),v("Limited",271,2400,P,A,1.12),v("GT",271,2400,P,M,1.20),v("STI",310,2500,P,M,1.38)] },
    { name:"BRZ",        body_type:"Coupe",    variants:[v("Premium",228,2400,P,M,0.95),v("Limited",228,2400,P,A,1.00),v("tS",228,2400,P,M,1.12)] },
    { name:"Solterra",   body_type:"SUV",      variants:[v("Base",215,0,E,A,0.92),v("Premium",215,0,E,A,1.00),v("Limited",215,0,E,A,1.10),v("Touring",215,0,E,A,1.18)] },
  ],

  // ─── JEEP ─────────────────────────────────────────────────────────────────
  Jeep: [
    { name:"Renegade",      body_type:"Crossover",variants:[v("Sport",177,1400,P,A,0.85),v("Latitude",180,2400,P,A,0.92),v("Altitude",180,2400,P,A,0.95),v("Limited",180,2400,P,A,1.00),v("Trailhawk",177,1300,H,A,1.08)] },
    { name:"Compass",       body_type:"SUV",      variants:[v("Sport",177,2400,P,M,0.85),v("Latitude",177,2400,P,A,0.92),v("Altitude",177,2400,P,A,0.95),v("Limited",177,2400,P,A,1.00),v("Trailhawk",177,1300,H,A,1.10)] },
    { name:"Cherokee",      body_type:"SUV",      variants:[v("Sport",180,2400,P,A,0.88),v("Latitude",180,2400,P,A,0.95),v("Altitude",180,2400,P,A,0.98),v("Limited",271,3200,P,A,1.00),v("Trailhawk",271,3200,P,A,1.10),v("Overland",271,3200,P,A,1.08)] },
    { name:"Wrangler",      body_type:"SUV",      variants:[v("Sport",270,3600,P,M,0.90),v("Sport S",270,3600,P,A,1.00),v("Sahara",270,3600,P,A,1.15),v("Rubicon",285,3600,P,M,1.28),v("4xe Hybrid",375,2000,H,A,1.35),v("392 V8",470,6400,P,A,1.65)] },
    { name:"Gladiator",     body_type:"Truck",    variants:[v("Sport",285,3600,P,M,0.92),v("Sport S",285,3600,P,A,1.00),v("Willys",285,3600,P,M,1.05),v("Overland",285,3600,P,A,1.12),v("Rubicon",285,3600,P,M,1.22),v("Mojave",285,3600,P,A,1.20)] },
    { name:"Grand Cherokee",body_type:"SUV",      variants:[v("Laredo",293,3600,P,A,0.88),v("Altitude",293,3600,P,A,0.95),v("Limited",293,3600,P,A,1.00),v("Trailhawk",293,3600,P,A,1.10),v("Overland",357,5700,P,A,1.20),v("Summit",357,5700,P,A,1.30),v("4xe Hybrid",375,2000,H,A,1.25),v("SRT",475,6400,P,A,1.50),v("Trackhawk",707,6200,P,A,1.80)] },
    { name:"Grand Wagoneer",body_type:"SUV",      variants:[v("Series I",471,6400,P,A,1.00),v("Series II",471,6400,P,A,1.10),v("Series III",471,6400,P,A,1.22),v("Obsidian",471,6400,P,A,1.30)] },
    { name:"Wagoneer",      body_type:"SUV",      variants:[v("Series I",392,5700,P,A,0.92),v("Series II",392,5700,P,A,1.00),v("Series III",392,5700,P,A,1.10),v("Carbide",392,5700,P,A,1.05)] },
  ],

  // ─── CHEVROLET ────────────────────────────────────────────────────────────
  Chevrolet: [
    { name:"Spark",      body_type:"Hatchback",variants:[v("LS",98,1400,P,M,0.80),v("1LT",98,1400,P,A,0.88),v("2LT",98,1400,P,A,0.95),v("ACTIV",98,1400,P,A,0.98)] },
    { name:"Trax",       body_type:"Crossover",variants:[v("LS",137,1300,P,A,0.85),v("1RS",137,1300,P,A,0.92),v("2RS",137,1300,P,A,0.95),v("ACTIV",137,1300,P,A,1.00)] },
    { name:"Trailblazer",body_type:"Crossover",variants:[v("LS",137,1300,P,A,0.85),v("LT",137,1300,P,A,0.92),v("ACTIV",155,1300,P,A,0.98),v("RS",155,1300,P,A,1.00)] },
    { name:"Equinox",    body_type:"SUV",      variants:[v("LS",175,1500,P,A,0.88),v("LT",175,1500,P,A,0.95),v("RS",175,1500,P,A,1.00),v("Premier",252,2000,P,A,1.08),v("EV",210,0,E,A,1.12)] },
    { name:"Blazer",     body_type:"SUV",      variants:[v("LT",228,2000,P,A,0.92),v("RS",228,2000,P,A,1.00),v("Premier",308,3600,P,A,1.10),v("SS",557,6200,P,A,1.38),v("EV",557,0,E,A,1.30)] },
    { name:"Malibu",     body_type:"Sedan",    variants:[v("LS",163,1500,P,A,0.90),v("RS",163,1500,P,A,1.00),v("LT",163,1500,P,A,1.08),v("Premier",163,1500,P,A,1.18)] },
    { name:"Camaro",     body_type:"Coupe",    variants:[v("LS",275,2000,P,M,0.85),v("LT",275,2000,P,A,1.00),v("RS",335,3600,P,A,1.12),v("SS",455,6200,P,M,1.30),v("ZL1",650,6200,P,M,1.65)] },
    { name:"Corvette",   body_type:"Sports",   variants:[v("1LT",495,6200,P,M,1.00),v("2LT",495,6200,P,A,1.08),v("3LT",495,6200,P,A,1.15),v("Z06",670,5500,P,A,1.55),v("E-Ray Hybrid",655,6200,H,A,1.40)] },
    { name:"Colorado",   body_type:"Truck",    variants:[v("WT",237,2700,P,A,0.88),v("LT",237,2700,P,A,0.95),v("Z71",237,2700,P,A,1.00),v("Trail Boss",237,2700,P,A,1.08),v("ZR2",310,3600,P,A,1.20)] },
    { name:"Silverado",  body_type:"Truck",    variants:[v("WT",310,4300,P,A,0.85),v("Custom",355,5300,P,A,0.92),v("LT",355,5300,P,A,1.00),v("LTZ",420,6200,P,A,1.12),v("High Country",420,6200,P,A,1.20),v("ZR2",420,6200,P,A,1.25)] },
    { name:"Traverse",   body_type:"SUV",      variants:[v("LS",310,3600,P,A,0.88),v("LT Cloth",310,3600,P,A,1.00),v("LT Leather",310,3600,P,A,1.10),v("RS",310,3600,P,A,1.15),v("Premier",310,3600,P,A,1.22),v("High Country",310,3600,P,A,1.30)] },
    { name:"Tahoe",      body_type:"SUV",      variants:[v("LS",355,5300,P,A,0.88),v("LT",355,5300,P,A,1.00),v("Z71",355,5300,P,A,1.08),v("Premier",420,6200,P,A,1.18),v("High Country",420,6200,P,A,1.28)] },
    { name:"Suburban",   body_type:"SUV",      variants:[v("LS",355,5300,P,A,0.88),v("LT",355,5300,P,A,1.00),v("Z71",355,5300,P,A,1.08),v("Premier",420,6200,P,A,1.18),v("High Country",420,6200,P,A,1.28)] },
    { name:"Bolt EV",    body_type:"Hatchback",variants:[v("1LT",200,0,E,A,0.92),v("2LT",200,0,E,A,1.00)] },
    { name:"Bolt EUV",   body_type:"Crossover",variants:[v("LT",200,0,E,A,0.92),v("Premier",200,0,E,A,1.00),v("Redline",200,0,E,A,1.05)] },
    { name:"Silverado EV",body_type:"Truck",  variants:[v("WT",510,0,E,A,0.95),v("LT Trail Boss",510,0,E,A,1.00),v("RST",664,0,E,A,1.15)] },
  ],

  // ─── VOLVO ────────────────────────────────────────────────────────────────
  Volvo: [
    { name:"XC40",       body_type:"SUV",      variants:[v("Core",197,1500,P,A,0.88),v("Plus",197,1500,P,A,1.00),v("Ultimate",247,2000,P,A,1.12),v("Recharge Plus",408,0,E,A,1.20),v("Recharge Ultimate",408,0,E,A,1.30)] },
    { name:"XC60",       body_type:"SUV",      variants:[v("Momentum",250,2000,P,A,0.92),v("Inscription",250,2000,P,A,1.00),v("R-Design",300,2000,P,A,1.10),v("Recharge T8",455,2000,H,A,1.28),v("Polestar Engineered",415,2000,H,A,1.40)] },
    { name:"XC90",       body_type:"SUV",      variants:[v("Momentum",250,2000,P,A,0.90),v("Inscription",300,2000,P,A,1.00),v("R-Design",300,2000,P,A,1.10),v("Recharge T8",455,2000,H,A,1.25),v("Excellence",455,2000,H,A,1.40)] },
    { name:"S60",        body_type:"Sedan",    variants:[v("Momentum",197,1500,P,A,0.90),v("Inscription",250,2000,P,A,1.00),v("R-Design",300,2000,P,A,1.12),v("Recharge",455,2000,H,A,1.22),v("Polestar Engineered",415,2000,H,A,1.35)] },
    { name:"S90",        body_type:"Sedan",    variants:[v("Momentum",250,2000,P,A,0.92),v("Inscription",300,2000,P,A,1.00),v("Recharge",455,2000,H,A,1.22),v("Ambience",455,2000,H,A,1.38)] },
    { name:"V60",        body_type:"Crossover",variants:[v("Momentum",197,1500,P,A,0.90),v("Inscription",250,2000,P,A,1.00),v("Cross Country",250,2000,P,A,1.08),v("Recharge",455,2000,H,A,1.20),v("Polestar Engineered",415,2000,H,A,1.32)] },
    { name:"V90",        body_type:"Crossover",variants:[v("Momentum",250,2000,P,A,0.90),v("Inscription",300,2000,P,A,1.00),v("Cross Country",300,2000,P,A,1.08),v("Recharge",455,2000,H,A,1.22)] },
    { name:"C40 Recharge",body_type:"Crossover",variants:[v("Core",402,0,E,A,0.95),v("Plus",402,0,E,A,1.00),v("Ultimate",408,0,E,A,1.12)] },
    { name:"EX30",       body_type:"Crossover",variants:[v("Core",272,0,E,A,0.88),v("Plus",272,0,E,A,1.00),v("Ultra",428,0,E,A,1.15)] },
    { name:"EX90",       body_type:"SUV",      variants:[v("Plus",402,0,E,A,1.00),v("Ultra",402,0,E,A,1.15),v("Ultra Twin",516,0,E,A,1.28)] },
  ],
};

export function getModels(brand: string): CarModel[] {
  return CAR_CATALOG[brand] ?? [];
}

export function getVariants(brand: string, modelName: string): Variant[] {
  return (CAR_CATALOG[brand] ?? []).find((m) => m.name === modelName)?.variants ?? [];
}

export function getVariantSpecs(brand: string, modelName: string, variantName: string): Variant | undefined {
  return getVariants(brand, modelName).find((v) => v.name === variantName);
}
