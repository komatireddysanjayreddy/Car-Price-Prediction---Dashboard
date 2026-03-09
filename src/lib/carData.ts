/**
 * carData.ts
 * -----------
 * Static car dataset (mirrors car_data.csv) used for:
 *  - Dashboard analytics (no DB needed — works on Vercel edge/static)
 *  - Seed data for the mock prediction API
 *
 * Star-Schema view:
 *  fact_sale (price, mileage, year) references:
 *    dim_brand, dim_fuel, dim_transmission, dim_condition
 */

export interface CarRecord {
  id: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  engine_cc: number;
  horsepower: number;
  doors: number;
  color: string;
  condition: string;
  price: number;
}

export const CAR_DATA: CarRecord[] = [
  { id:1,  brand:"Toyota",     model:"Camry",      year:2022, mileage:12000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:203, doors:4, color:"White",   condition:"Excellent", price:28500 },
  { id:2,  brand:"Toyota",     model:"Camry",      year:2020, mileage:35000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:203, doors:4, color:"Silver",  condition:"Good",      price:22000 },
  { id:3,  brand:"Toyota",     model:"Camry",      year:2018, mileage:68000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:2500, horsepower:203, doors:4, color:"Black",   condition:"Good",      price:16500 },
  { id:4,  brand:"Toyota",     model:"Camry",      year:2015, mileage:110000, fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:203, doors:4, color:"Blue",    condition:"Fair",      price:11000 },
  { id:5,  brand:"Toyota",     model:"Corolla",    year:2023, mileage:5000,   fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1800, horsepower:139, doors:4, color:"White",   condition:"Excellent", price:25000 },
  { id:6,  brand:"Toyota",     model:"Corolla",    year:2021, mileage:22000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1800, horsepower:139, doors:4, color:"Red",     condition:"Good",      price:19500 },
  { id:7,  brand:"Toyota",     model:"Corolla",    year:2019, mileage:55000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:1800, horsepower:139, doors:4, color:"Silver",  condition:"Good",      price:14500 },
  { id:8,  brand:"Toyota",     model:"Corolla",    year:2016, mileage:95000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:1800, horsepower:139, doors:4, color:"Gray",    condition:"Fair",      price:9500  },
  { id:9,  brand:"Honda",      model:"Civic",      year:2022, mileage:15000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1500, horsepower:158, doors:4, color:"White",   condition:"Excellent", price:27000 },
  { id:10, brand:"Honda",      model:"Civic",      year:2020, mileage:40000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1500, horsepower:158, doors:4, color:"Black",   condition:"Good",      price:21000 },
  { id:11, brand:"Honda",      model:"Civic",      year:2018, mileage:72000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:1500, horsepower:158, doors:4, color:"Blue",    condition:"Good",      price:15500 },
  { id:12, brand:"Honda",      model:"Civic",      year:2015, mileage:120000, fuel_type:"Petrol",   transmission:"Manual",    engine_cc:1500, horsepower:158, doors:4, color:"Silver",  condition:"Fair",      price:10000 },
  { id:13, brand:"Honda",      model:"CR-V",       year:2022, mileage:18000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:190, doors:4, color:"White",   condition:"Excellent", price:34000 },
  { id:14, brand:"Honda",      model:"CR-V",       year:2020, mileage:45000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:190, doors:4, color:"Gray",    condition:"Good",      price:27500 },
  { id:15, brand:"Honda",      model:"CR-V",       year:2018, mileage:80000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:190, doors:4, color:"Black",   condition:"Good",      price:20500 },
  { id:16, brand:"Honda",      model:"CR-V",       year:2015, mileage:130000, fuel_type:"Diesel",   transmission:"Automatic", engine_cc:2000, horsepower:190, doors:4, color:"Blue",    condition:"Fair",      price:14000 },
  { id:17, brand:"BMW",        model:"3 Series",   year:2022, mileage:10000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Black",   condition:"Excellent", price:48000 },
  { id:18, brand:"BMW",        model:"3 Series",   year:2020, mileage:38000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"White",   condition:"Good",      price:39000 },
  { id:19, brand:"BMW",        model:"3 Series",   year:2018, mileage:70000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Silver",  condition:"Good",      price:28000 },
  { id:20, brand:"BMW",        model:"3 Series",   year:2015, mileage:115000, fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Blue",    condition:"Fair",      price:18500 },
  { id:21, brand:"BMW",        model:"5 Series",   year:2022, mileage:8000,   fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"Black",   condition:"Excellent", price:62000 },
  { id:22, brand:"BMW",        model:"5 Series",   year:2020, mileage:32000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"White",   condition:"Good",      price:50000 },
  { id:23, brand:"BMW",        model:"5 Series",   year:2018, mileage:65000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"Silver",  condition:"Good",      price:37000 },
  { id:24, brand:"BMW",        model:"5 Series",   year:2015, mileage:105000, fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"Gray",    condition:"Fair",      price:24000 },
  { id:25, brand:"Mercedes",   model:"C-Class",    year:2022, mileage:9000,   fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"White",   condition:"Excellent", price:55000 },
  { id:26, brand:"Mercedes",   model:"C-Class",    year:2020, mileage:36000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Black",   condition:"Good",      price:44000 },
  { id:27, brand:"Mercedes",   model:"C-Class",    year:2018, mileage:68000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Silver",  condition:"Good",      price:31000 },
  { id:28, brand:"Mercedes",   model:"C-Class",    year:2015, mileage:112000, fuel_type:"Diesel",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Blue",    condition:"Fair",      price:20000 },
  { id:29, brand:"Mercedes",   model:"E-Class",    year:2022, mileage:7000,   fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:335, doors:4, color:"Black",   condition:"Excellent", price:72000 },
  { id:30, brand:"Mercedes",   model:"E-Class",    year:2020, mileage:28000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:335, doors:4, color:"White",   condition:"Good",      price:58000 },
  { id:31, brand:"Mercedes",   model:"E-Class",    year:2018, mileage:60000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:335, doors:4, color:"Silver",  condition:"Good",      price:43000 },
  { id:32, brand:"Mercedes",   model:"E-Class",    year:2015, mileage:98000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:2500, horsepower:335, doors:4, color:"Gray",    condition:"Fair",      price:28000 },
  { id:33, brand:"Ford",       model:"Mustang",    year:2022, mileage:14000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:5000, horsepower:450, doors:2, color:"Red",     condition:"Excellent", price:52000 },
  { id:34, brand:"Ford",       model:"Mustang",    year:2020, mileage:42000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:5000, horsepower:450, doors:2, color:"Black",   condition:"Good",      price:42000 },
  { id:35, brand:"Ford",       model:"Mustang",    year:2018, mileage:75000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:5000, horsepower:450, doors:2, color:"White",   condition:"Good",      price:31000 },
  { id:36, brand:"Ford",       model:"Mustang",    year:2015, mileage:118000, fuel_type:"Petrol",   transmission:"Manual",    engine_cc:5000, horsepower:450, doors:2, color:"Yellow",  condition:"Fair",      price:21000 },
  { id:37, brand:"Ford",       model:"F-150",      year:2022, mileage:20000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3500, horsepower:400, doors:4, color:"White",   condition:"Excellent", price:45000 },
  { id:38, brand:"Ford",       model:"F-150",      year:2020, mileage:50000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3500, horsepower:400, doors:4, color:"Black",   condition:"Good",      price:36000 },
  { id:39, brand:"Ford",       model:"F-150",      year:2018, mileage:88000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3500, horsepower:400, doors:4, color:"Silver",  condition:"Good",      price:26000 },
  { id:40, brand:"Ford",       model:"F-150",      year:2015, mileage:135000, fuel_type:"Diesel",   transmission:"Manual",    engine_cc:3500, horsepower:400, doors:4, color:"Blue",    condition:"Fair",      price:17000 },
  { id:41, brand:"Audi",       model:"A4",         year:2022, mileage:11000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:201, doors:4, color:"White",   condition:"Excellent", price:46000 },
  { id:42, brand:"Audi",       model:"A4",         year:2020, mileage:39000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:201, doors:4, color:"Black",   condition:"Good",      price:37000 },
  { id:43, brand:"Audi",       model:"A4",         year:2018, mileage:72000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:201, doors:4, color:"Silver",  condition:"Good",      price:26000 },
  { id:44, brand:"Audi",       model:"A4",         year:2015, mileage:115000, fuel_type:"Diesel",   transmission:"Automatic", engine_cc:2000, horsepower:201, doors:4, color:"Gray",    condition:"Fair",      price:17000 },
  { id:45, brand:"Audi",       model:"Q5",         year:2022, mileage:13000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:261, doors:4, color:"White",   condition:"Excellent", price:58000 },
  { id:46, brand:"Audi",       model:"Q5",         year:2020, mileage:41000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:261, doors:4, color:"Black",   condition:"Good",      price:47000 },
  { id:47, brand:"Audi",       model:"Q5",         year:2018, mileage:78000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:261, doors:4, color:"Silver",  condition:"Good",      price:34000 },
  { id:48, brand:"Audi",       model:"Q5",         year:2015, mileage:125000, fuel_type:"Diesel",   transmission:"Automatic", engine_cc:2000, horsepower:261, doors:4, color:"Blue",    condition:"Fair",      price:22000 },
  { id:49, brand:"Volkswagen", model:"Golf",       year:2022, mileage:16000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1400, horsepower:148, doors:4, color:"White",   condition:"Excellent", price:28000 },
  { id:50, brand:"Volkswagen", model:"Golf",       year:2020, mileage:44000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1400, horsepower:148, doors:4, color:"Blue",    condition:"Good",      price:22000 },
  { id:51, brand:"Volkswagen", model:"Golf",       year:2018, mileage:76000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:1400, horsepower:148, doors:4, color:"Silver",  condition:"Good",      price:15500 },
  { id:52, brand:"Volkswagen", model:"Golf",       year:2015, mileage:122000, fuel_type:"Diesel",   transmission:"Manual",    engine_cc:1400, horsepower:148, doors:4, color:"Black",   condition:"Fair",      price:10000 },
  { id:53, brand:"Hyundai",    model:"Elantra",    year:2022, mileage:18000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1600, horsepower:147, doors:4, color:"White",   condition:"Excellent", price:22000 },
  { id:54, brand:"Hyundai",    model:"Elantra",    year:2020, mileage:48000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1600, horsepower:147, doors:4, color:"Black",   condition:"Good",      price:17000 },
  { id:55, brand:"Hyundai",    model:"Tucson",     year:2022, mileage:15000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:187, doors:4, color:"White",   condition:"Excellent", price:30000 },
  { id:56, brand:"Hyundai",    model:"Tucson",     year:2020, mileage:46000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:187, doors:4, color:"Gray",    condition:"Good",      price:24000 },
  { id:57, brand:"Kia",        model:"Sportage",   year:2022, mileage:17000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:180, doors:4, color:"White",   condition:"Excellent", price:28500 },
  { id:58, brand:"Kia",        model:"Sportage",   year:2020, mileage:47000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:180, doors:4, color:"Black",   condition:"Good",      price:22500 },
  { id:59, brand:"Kia",        model:"Sorento",    year:2022, mileage:12000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:291, doors:4, color:"Black",   condition:"Excellent", price:38000 },
  { id:60, brand:"Kia",        model:"Sorento",    year:2020, mileage:42000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:291, doors:4, color:"White",   condition:"Good",      price:30500 },
  { id:61, brand:"Nissan",     model:"Altima",     year:2022, mileage:16000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:182, doors:4, color:"White",   condition:"Excellent", price:26000 },
  { id:62, brand:"Nissan",     model:"Altima",     year:2020, mileage:48000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:182, doors:4, color:"Black",   condition:"Good",      price:20000 },
  { id:63, brand:"Nissan",     model:"X-Trail",    year:2022, mileage:14000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:170, doors:4, color:"White",   condition:"Excellent", price:32000 },
  { id:64, brand:"Nissan",     model:"X-Trail",    year:2020, mileage:44000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:170, doors:4, color:"Gray",    condition:"Good",      price:25500 },
  { id:65, brand:"Mazda",      model:"CX-5",       year:2022, mileage:13000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:187, doors:4, color:"Red",     condition:"Excellent", price:33000 },
  { id:66, brand:"Mazda",      model:"CX-5",       year:2020, mileage:43000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:187, doors:4, color:"White",   condition:"Good",      price:26500 },
  { id:67, brand:"Lexus",      model:"ES",         year:2022, mileage:9000,   fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3500, horsepower:302, doors:4, color:"White",   condition:"Excellent", price:48000 },
  { id:68, brand:"Lexus",      model:"ES",         year:2020, mileage:35000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3500, horsepower:302, doors:4, color:"Black",   condition:"Good",      price:39000 },
  { id:69, brand:"Lexus",      model:"RX",         year:2022, mileage:10000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3500, horsepower:295, doors:4, color:"Black",   condition:"Excellent", price:58000 },
  { id:70, brand:"Lexus",      model:"RX",         year:2020, mileage:38000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3500, horsepower:295, doors:4, color:"White",   condition:"Good",      price:47000 },
  { id:71, brand:"Tesla",      model:"Model 3",    year:2022, mileage:14000,  fuel_type:"Electric", transmission:"Automatic", engine_cc:0,    horsepower:283, doors:4, color:"White",   condition:"Excellent", price:45000 },
  { id:72, brand:"Tesla",      model:"Model 3",    year:2020, mileage:45000,  fuel_type:"Electric", transmission:"Automatic", engine_cc:0,    horsepower:283, doors:4, color:"Red",     condition:"Good",      price:35000 },
  { id:73, brand:"Tesla",      model:"Model Y",    year:2022, mileage:10000,  fuel_type:"Electric", transmission:"Automatic", engine_cc:0,    horsepower:384, doors:4, color:"White",   condition:"Excellent", price:55000 },
  { id:74, brand:"Tesla",      model:"Model Y",    year:2020, mileage:42000,  fuel_type:"Electric", transmission:"Automatic", engine_cc:0,    horsepower:384, doors:4, color:"Blue",    condition:"Good",      price:43000 },
  { id:75, brand:"Porsche",    model:"Cayenne",    year:2022, mileage:8000,   fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3000, horsepower:340, doors:4, color:"White",   condition:"Excellent", price:82000 },
  { id:76, brand:"Porsche",    model:"Cayenne",    year:2020, mileage:30000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:3000, horsepower:340, doors:4, color:"Black",   condition:"Good",      price:66000 },
  { id:77, brand:"Land Rover", model:"Discovery",  year:2022, mileage:12000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:306, doors:4, color:"White",   condition:"Excellent", price:75000 },
  { id:78, brand:"Land Rover", model:"Discovery",  year:2020, mileage:38000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:306, doors:4, color:"Black",   condition:"Good",      price:60000 },
  { id:79, brand:"Volvo",      model:"XC60",       year:2022, mileage:10000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:250, doors:4, color:"White",   condition:"Excellent", price:52000 },
  { id:80, brand:"Volvo",      model:"XC60",       year:2020, mileage:36000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:250, doors:4, color:"Black",   condition:"Good",      price:42000 },
  { id:81, brand:"Toyota",     model:"RAV4",       year:2022, mileage:11000,  fuel_type:"Hybrid",   transmission:"Automatic", engine_cc:2500, horsepower:219, doors:4, color:"White",   condition:"Excellent", price:38000 },
  { id:82, brand:"Toyota",     model:"RAV4",       year:2020, mileage:40000,  fuel_type:"Hybrid",   transmission:"Automatic", engine_cc:2500, horsepower:219, doors:4, color:"Black",   condition:"Good",      price:30500 },
  { id:83, brand:"Honda",      model:"Accord",     year:2022, mileage:12000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:192, doors:4, color:"White",   condition:"Excellent", price:32000 },
  { id:84, brand:"Honda",      model:"Accord",     year:2020, mileage:40000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:192, doors:4, color:"Silver",  condition:"Good",      price:25500 },
  { id:85, brand:"BMW",        model:"X5",         year:2022, mileage:9000,   fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"Black",   condition:"Excellent", price:72000 },
  { id:86, brand:"BMW",        model:"X5",         year:2020, mileage:34000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"White",   condition:"Good",      price:58000 },
  { id:87, brand:"Mercedes",   model:"GLC",        year:2022, mileage:11000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"White",   condition:"Excellent", price:62000 },
  { id:88, brand:"Mercedes",   model:"GLC",        year:2020, mileage:38000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:255, doors:4, color:"Black",   condition:"Good",      price:50000 },
  { id:89, brand:"Audi",       model:"Q7",         year:2022, mileage:10000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"Black",   condition:"Excellent", price:78000 },
  { id:90, brand:"Audi",       model:"Q7",         year:2020, mileage:36000,  fuel_type:"Diesel",   transmission:"Automatic", engine_cc:3000, horsepower:335, doors:4, color:"White",   condition:"Good",      price:62000 },
  { id:91, brand:"Ford",       model:"Explorer",   year:2022, mileage:15000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2300, horsepower:300, doors:4, color:"White",   condition:"Excellent", price:42000 },
  { id:92, brand:"Ford",       model:"Explorer",   year:2020, mileage:45000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2300, horsepower:300, doors:4, color:"Black",   condition:"Good",      price:34000 },
  { id:93, brand:"Jeep",       model:"Wrangler",   year:2022, mileage:16000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:3600, horsepower:285, doors:2, color:"Black",   condition:"Excellent", price:48000 },
  { id:94, brand:"Jeep",       model:"Wrangler",   year:2020, mileage:45000,  fuel_type:"Petrol",   transmission:"Manual",    engine_cc:3600, horsepower:285, doors:2, color:"Green",   condition:"Good",      price:38500 },
  { id:95, brand:"Subaru",     model:"Outback",    year:2022, mileage:13000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:182, doors:4, color:"Silver",  condition:"Excellent", price:34000 },
  { id:96, brand:"Subaru",     model:"Outback",    year:2020, mileage:42000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2500, horsepower:182, doors:4, color:"Blue",    condition:"Good",      price:27000 },
  { id:97, brand:"Mazda",      model:"3",          year:2022, mileage:20000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:155, doors:4, color:"White",   condition:"Excellent", price:23000 },
  { id:98, brand:"Mazda",      model:"3",          year:2020, mileage:52000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:2000, horsepower:155, doors:4, color:"Red",     condition:"Good",      price:17500 },
  { id:99, brand:"Chevrolet",  model:"Malibu",     year:2022, mileage:19000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1500, horsepower:163, doors:4, color:"White",   condition:"Excellent", price:24000 },
  { id:100,brand:"Chevrolet",  model:"Malibu",     year:2020, mileage:50000,  fuel_type:"Petrol",   transmission:"Automatic", engine_cc:1500, horsepower:163, doors:4, color:"Black",   condition:"Good",      price:18500 },
];

// ─── DERIVED / AGGREGATED VIEWS (Star-Schema style) ───────────────

export function getBrandAvgPrice() {
  const map = new Map<string, { total: number; count: number }>();
  for (const car of CAR_DATA) {
    const entry = map.get(car.brand) ?? { total: 0, count: 0 };
    entry.total += car.price;
    entry.count += 1;
    map.set(car.brand, entry);
  }
  return Array.from(map.entries())
    .map(([brand, { total, count }]) => ({
      brand,
      avgPrice: Math.round(total / count),
      count,
    }))
    .sort((a, b) => b.avgPrice - a.avgPrice);
}

export function getFuelTypeDistribution() {
  const map = new Map<string, number>();
  for (const car of CAR_DATA) {
    map.set(car.fuel_type, (map.get(car.fuel_type) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
}

export function getMileageVsPrice() {
  return CAR_DATA.map((c) => ({
    mileage: c.mileage,
    price: c.price,
    brand: c.brand,
    year: c.year,
  }));
}

export function getYearTrend() {
  const map = new Map<number, { total: number; count: number }>();
  for (const car of CAR_DATA) {
    const entry = map.get(car.year) ?? { total: 0, count: 0 };
    entry.total += car.price;
    entry.count += 1;
    map.set(car.year, entry);
  }
  return Array.from(map.entries())
    .map(([year, { total, count }]) => ({
      year,
      avgPrice: Math.round(total / count),
    }))
    .sort((a, b) => a.year - b.year);
}

export function getConditionBreakdown() {
  const map = new Map<string, { total: number; count: number }>();
  for (const car of CAR_DATA) {
    const entry = map.get(car.condition) ?? { total: 0, count: 0 };
    entry.total += car.price;
    entry.count += 1;
    map.set(car.condition, entry);
  }
  return Array.from(map.entries()).map(([condition, { total, count }]) => ({
    condition,
    avgPrice: Math.round(total / count),
    count,
  }));
}

export function getKPIs() {
  const prices = CAR_DATA.map((c) => c.price);
  const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const brands = new Set(CAR_DATA.map((c) => c.brand)).size;
  return { avg: Math.round(avg), max, min, totalListings: CAR_DATA.length, brands };
}

export const LUXURY_BRANDS = ["BMW","Mercedes","Audi","Lexus","Porsche","Land Rover","Volvo"];
