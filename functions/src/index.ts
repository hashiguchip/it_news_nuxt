import * as functions from "firebase-functions";
// The Firebase Admin SDK to access the Firebase Realtime Database.

import * as Express from "express";
const app = Express();

import * as admin from "firebase-admin";
import * as data from "./data.json";
import * as category from "./category.json";

admin.initializeApp();

// import { Nuxt } from "nuxt";

// const config = {
//   dev: false,
//   buildDir: "nuxt",
//   build: {
//     publicPath: "/"
//   }
// };

// const nuxt = new Nuxt(config);

app.get("/sites", (req: Express.Request, res: Express.Response) => {
  res.set("Cache-Control", "public, max-age=600, s-maxage-1200");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(data);
});

app.get("/category", (req: Express.Request, res: Express.Response) => {
  res.set("Cache-Control", "public, max-age=600, s-maxage-1200");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(category);
});

app.get("*", (req: Express.Request, res: Express.Response) => {
  res.set("Cache-Control", "public, max-age=600, s-maxage-1200");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(category);
});

// function handleRequest(req: Express.Request, res: Express.Response) {
//   res.set("Cache-Control", "public, max-age=600, s-maxage-1200");
//   // add variables to req to use them in Nuxt component
//   res.send("aaaaaaaaaaaaaaaaaaa");
//   // nuxt
//   //   .renderRoute("/", { req })
//   //   .then(result => {
//   //     res.send(result.html);
//   //   })
//   //   .catch(e => {
//   //     res.send(e);
//   //   });
// }

// app.get("*", handleRequest);

exports.app = functions.https.onRequest(app);
