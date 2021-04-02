"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = format;

function format(prefix, result) {
  return "The value of ".concat(prefix, " is: ").concat(result);
} // or export default format