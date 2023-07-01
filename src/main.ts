import oraytips from "./core/oraytips";

Object.defineProperty(window, "oraytips", {
  value: oraytips,
  writable: false
})

export default oraytips;