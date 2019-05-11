import * as functions from "firebase-functions";
import * as Express from "express";
const app = Express();

import * as data from "./data.json";
import * as category from "./category.json";

app.get("/sites", (req: Express.Request, res: Express.Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  return res.send(data);
});

app.get("/category", (req: Express.Request, res: Express.Response) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  return res.send(category);
});

// Expose Express API as a single Cloud Function:
exports.app = functions.https.onRequest(app);
