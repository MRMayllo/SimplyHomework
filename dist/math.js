"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.hypothenuse = hypothenuse;
exports.circleArea = circleArea;
exports.PI = void 0;

function pow(base) {
  var exponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (exponent === 0) {
    return 1;
  }

  return base * pow(base, exponent - 1);
}

function hypothenuse(adjacent, opposite) {
  return {
    adjacent: adjacent,
    opposite: opposite,
    hypothenuse: Math.sqrt(adjacent * adjacent + opposite * opposite)
  };
}

var PI = 3.14159; // or export let PI = Math.PI

exports.PI = PI;

function circleArea(radius) {
  // can let PI above as we export it,
  // but it would be safer to  give a variable PI inside this function
  // or just use Math.PI instead PI
  return PI * (radius * radius);
}