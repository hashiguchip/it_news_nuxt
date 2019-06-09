import * as functions from "firebase-functions";

process.env.DEBUG = "nuxt:*";
// import * as functions from "firebase-functions";
// The Firebase Admin SDK to access the Firebase Realtime Database.

import * as Express from "express";
const app = Express();

import * as admin from "firebase-admin";
import * as data from "./data.json";
import * as category from "./category.json";

admin.initializeApp();

const { Nuxt } = require("nuxt");

const config = {
  dev: false,
  ssr: true,
  ssrLog: true
  // buildDir: "../nuxt",
  // build: {
  //   publicPath: "/"
  // }
};

//const baseUrl = "https://it-news-b9a2d.firebaseapp.com";
const baseUrl = "";

app.get(baseUrl + "/sites", (req: Express.Request, res: Express.Response) => {
  res.set("Cache-Control", "public, max-age=600, s-maxage-1200");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(data);
});

app.get(
  baseUrl + "/category",
  (req: Express.Request, res: Express.Response) => {
    res.set("Cache-Control", "public, max-age=600, s-maxage-1200");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.send(category);
  }
);

const nuxt = new Nuxt(config);

// const port = process.env.PORT || 3000;

// すべてのルートを Nuxt.js でレンダリングする
// firebase serveだと動かない..?? ってことか？？
app.use(nuxt.render);

// Expose Express API as a single Cloud Function:
exports.app = functions.https.onRequest(app);
