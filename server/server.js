const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

//*************************** EXPRESS SERVER ***********************************/

/*

███████╗██╗░░██╗██████╗░██████╗░███████╗░██████╗░██████╗
██╔════╝╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝
█████╗░░░╚███╔╝░██████╔╝██████╔╝█████╗░░╚█████╗░╚█████╗░
██╔══╝░░░██╔██╗░██╔═══╝░██╔══██╗██╔══╝░░░╚═══██╗░╚═══██╗
███████╗██╔╝╚██╗██║░░░░░██║░░██║███████╗██████╔╝██████╔╝
╚══════╝╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═════╝░╚═════╝░
*/
const port = 3000;
/**
 * Middlewares
 */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
// https://angular.io/generated/images/marketing/concept-icons/material.png

let rawdata = fs.readFileSync("config.json");
let config = JSON.parse(rawdata);
/**
 * Endpoints
 */
app.get("", (req, res) => res.send("External Config server running"));

app.get("/config", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(config);
});

app.get("/stop", (req, res) => {
  process.exit();
});

app.listen(port, () =>
  console.log(`External Configuration Server listening on port ${port}!`)
);
