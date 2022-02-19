import objectCrawler from "./objectCrawler.js";

import dataTypes from "../dataTypes/index.js";
import keywords from "../keywords/index.js";
import operators from "../operators/index.js";
import variables from "../variables/index.js";

export default function interpreter(rawSource) {
  let source = "";

  const dataPerLine = rawSource.split("\n");
  for (const line in dataPerLine) {
    const tokens = dataPerLine[line].split(" ") || line;
    for (const token of tokens) {
      const tokenObject = objectCrawler(token);
      switch (tokenObject.class) {
        case "DATA_TYPE":
          appendLine(dataTypes(), source);
          break;
        case "KEYWORD":
          appendLine(keywords(), source);
          break;
        case "OPERATOR":
          appendLine(operators(), source);
          break;
        case "VARIABLE":
          appendLine(variables(), source);
          break;
        default:
          //check if it is an existing variable or numerical value
          break;
      }
    }
  }
}

function appendLine(newLine, source) {
  source += "\n" + newLine;
}
