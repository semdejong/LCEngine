import interpreter from "./interpreter/index.js";

export default function LCEngine(rawSource) {
  interpreter(rawSource);
}
