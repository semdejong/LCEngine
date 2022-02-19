import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method

const operators = require("../operators/operators.json");
const keywords = require("../keywords/keywords.json");
const variables = require("../variables/variables.json");
const dataTypes = require("../dataTypes/dataTypes.json");

export default function objectCrawler(searchableToken) {
  const objectToReturn =
    crawl(operators, searchableToken) ||
    crawl(keywords, searchableToken) ||
    crawl(variables, searchableToken) ||
    crawl(dataTypes, searchableToken);

  return objectToReturn;
}

function crawl(object, searchableToken) {
  const objectKeys = Object.keys(object);
  for (const objectKey of objectKeys) {
    const tokens = Object.keys(object[objectKey]);
    for (const token of tokens) {
      if (token === searchableToken) {
        return object[objectKey][token];
      }
    }
  }
}
