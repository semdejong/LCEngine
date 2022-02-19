//#############################################
// Test file for the LangCode LCEngine
// Write your LangCode in test.lang
//#############################################
import fs from "fs";

import LCEngine from "./index.js";

fs.readFile("test.lang", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    if (data.toString().trim() === "") {
      return;
    }
    console.log(console.log(LCEngine(data.toString())));
  }
});
