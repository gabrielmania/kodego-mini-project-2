const bikes = [
  {
    brand: "Dartmoor",
    model: "Primal Pro",
    price: 110000,
    image: "images/bikes/dartmoor-primal-pro.jpg",
  },
  {
    brand: "Dartmoor",
    model: "Blackbird Evo",
    price: 150000,
    image: "images/bikes/dartmoor-blackbird-evo.jpg",
  },
  {
    brand: "Dartmoor",
    model: "Hornet Pro",
    price: 129000,
    image: "images/bikes/dartmoor-hornet-pro.jpg",
  },
  {
    brand: "Giant",
    model: "TCR Advance Pro",
    price: 115000,
    image: "images/bikes/giant-tcr-advanced-pro.jpg",
  },
  {
    brand: "Giant",
    model: "Trance X",
    price: 119000,
    image: "images/bikes/giant-trance-x.jpg",
  },
  {
    brand: "Giant",
    model: "XTC SLR",
    price: 60000,
    image: "images/bikes/giant-xtc-slr.jpg",
  },
  {
    brand: "GT",
    model: "Fury Pro",
    price: 360000,
    image: "images/bikes/gt-fury-pro.png",
  },
  {
    brand: "GT",
    model: "Grade Elite",
    price: 60000,
    image: "images/bikes/gt-grade-elite.png",
  },
  {
    brand: "GT",
    model: "Sensor Sport",
    price: 112000,
    image: "images/bikes/gt-sensor-sport.png",
  },
  {
    brand: "Trek",
    model: "Emonda SLR eTap",
    price: 395000,
    image: "images/bikes/trek-emonda-slr-etap.jpg",
  },
  {
    brand: "Trek",
    model: "Procaliber 9.5",
    price: 117000,
    image: "images/bikes/trek-procaliber-9.5.jpg",
  },
  {
    brand: "Trek",
    model: "Top Fuel 7",
    price: 208000,
    image: "images/bikes/trek-top-fuel-7.jpg",
  },
];

const parts = [
  {
    brand: "Box",
    model: "Two Prime 9 Groupset, Multi Shift",
    price: 295 * 60,
    image: "images/parts/box-two.jpg",
  },
  {
    brand: "Galfer",
    model: "Wave Disc Brake Rotor, 223mm 2mm",
    price: 55 * 60,
    image: "images/parts/galfer-wave-disc.jpg",
  },
  {
    brand: "RockShox",
    model: "Judy Gold RL Suspension Fork",
    price: 450 * 60,
    image: "images/parts/rockshox-judy.jpg",
  },
  {
    brand: "SRAM",
    model: "RED AXS Crank Arm Assembly",
    price: 410 * 60,
    image: "images/parts/sram-red.jpg",
  },
  {
    brand: "Stan's",
    model: 'Flow MK4 27.5" Disc Rim',
    price: 105 * 60,
    image: "images/parts/stan's-flow.jpg",
  },
  {
    brand: "Panzer",
    model: 'EVO tire insert w/ 4oz sealant 29" ENDURO',
    price: 68 * 60,
    image: "images/parts/panzer-evo.jpg",
  },
  {
    brand: "SRAM",
    model: "GX Eagle AXS Upgrade Kit",
    price: 633 * 60,
    image: "images/parts/sram-gx-eagle.jpg",
  },
  {
    brand: "Halo",
    model: 'Twin Rail II K Tire, 29er x 2.2"',
    price: 60 * 60,
    image: "images/parts/halo-twin.jpg",
  },
  {
    brand: "Ergon",
    model: "SM Sport Gel Saddle - Chromoly Stealth",
    price: 100 * 60,
    image: "images/parts/ergon-sm.jpg",
  },
  {
    brand: "Cane Creek",
    model: "DB Kitsuma Coil Rear Shock - 230 x 60",
    price: 730 * 60,
    image: "images/parts/canecreek-db.jpg",
  },
  {
    brand: "DT-Swiss",
    model: "180 EXP Rear Hub - 12 x 142mm Center-Lock Campagnolo Black",
    price: 710 * 60,
    image: "images/parts/dt-swiss-180.jpg",
  },
  {
    brand: "Specialized",
    model: "Pro H2 Ergo Carbon Handlebar 42cm",
    price: 200 * 60,
    image: "images/parts/specialized-pro-h2.jpg",
  },
];

const gears = [
  {
    brand: "Garmin",
    model: "Running Watch Forerunner 935 Tri-Bundle",
    price: 650 * 60,
    image: "images/gears/garmin-gps.jpg",
  },
  {
    brand: "Bont",
    model: "Riot MTB+ BOA Cycling Shoe",
    price: 190 * 60,
    image: "images/gears/bont-riot.jpg",
  },
  {
    brand: "45NRTH",
    model: "Naughtvind Men's Jacket",
    price: 180 * 60,
    image: "images/gears/45nrth-naughtvind.jpg",
  },
  {
    brand: "Lezyne",
    model: "Digital Pressure High Pressure Frame Pump",
    price: 80 * 60,
    image: "images/gears/lezyne-digital-pressure.jpg",
  },
  {
    brand: "Apidura",
    model: "Full Frame Pack Expedition",
    price: 210 * 60,
    image: "images/gears/apidura-full-frame-pack.jpg",
  },
  {
    brand: "Fidlock",
    model: "TWIST Deluxe Water Bottle Cage Set",
    price: 55 * 60,
    image: "images/gears/fidlock-twist.jpg",
  },
  {
    brand: "Feedback",
    model: "Sports RAKK XL Display Stand",
    price: 62 * 60,
    image: "images/gears/feedback-sports-rakk.jpg",
  },
  {
    brand: "Lezyne",
    model: "Mega XL GPS HR Computer",
    price: 300 * 60,
    image: "images/gears/lezyne-mega-xl.jpg",
  },
  {
    brand: "Elite",
    model: "Tuo Smart Trainer",
    price: 500 * 60,
    image: "images/gears/elite-tuo.jpg",
  },
  {
    brand: "Supernova",
    model: "Z-Reflektor 2 Fender Mounted Reflector",
    price: 16 * 60,
    image: "images/gears/supernova-z-reflek.jpg",
  },
  {
    brand: "Odyssey",
    model: "Traveler Bike Bag Black",
    price: 230 * 60,
    image: "images/gears/odyssey-traveler.jpg",
  },
  {
    brand: "Cycleware",
    model: "Urbie Urban Bar-end Mirror",
    price: 25 * 60,
    image: "images/gears/cycleware-urbie.jpg",
  },
];
