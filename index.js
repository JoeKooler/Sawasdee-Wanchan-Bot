const Jimp = require("jimp");
const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const fs = require("fs");

app.get("/", async (req, res) => {
  const font = await Jimp.loadFont(path.join(__dirname, "/Fonts/2.fnt"));
  let imgRef = await axios
    .get("https://source.unsplash.com/random")
    .then((res) => {
      return res.request.res.responseUrl;
    });
  const image = await Jimp.read(imgRef);

  image.print(font, 200, 200, "สวัสดีวันจันทร์").write("eiei2.png");
  console.log(imgRef);
  res.send(imgRef);
});

app.listen("3000", () => console.log(`Example app listening on port 3000!`));
