// pulled from lesson 7

let t = document.getElementById("currTemp").innerHTML;
let s = document.getElementById("speed").innerHTML;
let windchill = Math.round(35.74 + 0.6215 * t - 35.75 * s**0.16 + 0.4275 * t * s**0.16);
document.getElementById("chill").innerHTML = `${windchill}`;
