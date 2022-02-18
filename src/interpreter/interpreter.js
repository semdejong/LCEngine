import objectCrawler from "./objectCrawler";

export default function interpreter(rawSource) {
  const dataPerLine = rawData.split("\n");

  for (const line in dataPerLine) {
    const tokens = dataPerLine[line].split(" ");
    for (const token in tokens) {
      const tokenObject = objectCrawler(token);
      console.log(tokenObject);
    }
  }
}
