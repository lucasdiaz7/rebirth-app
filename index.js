//    
//
//
//    ░░░░░░▄█▄█░░░░░▄░░░░░░
//    ░░░░██████░░░░░░█░░░░░
//    ░░░░░░███████████░░░░░
//    ▒▒▒▒▒▒█▀▀█▀▀██▀██▒▒▒▒▒
//    ▒▒▒▒▒▄█▒▄█▒▒▄█▒▄█▒▒▒▒▒
//    ~~~~~~~~~~~~~~~~~~~~~~
// import server from"./src/app.js";
// import { conn } from"./src/db.js";
// import { getPets } from"./src/tools/preCharge.js";
// import { getAdmin } from"./src/tools/preChargeAdmin.js";

// import { getTestimonials } from"./src/tools/preChargeTestimonials.js";


const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { getPets } = require("./src/tools/preCharge.js");
const { getAdmin } = require("./src/tools/preChargeAdmin.js");

const { getTestimonials } = require("./src/tools/preChargeTestimonials.js");

const { PORT } = process.env;

conn.sync({ force: false }).then(async () => {
  await getTestimonials();
  await getAdmin();
  await getPets();


  server.listen(PORT || 7642, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});
