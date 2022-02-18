import interpreter from "./interpreter";

export default function LCEngine(rawSource) {
  interpreter(rawSource);
}
