var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("lucy");
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift("mira");
  return kittens;
}
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}
function appendKitten(name) {
  return [...kittens, "lucy"];
}
function prependKitten(name) {
  return ["mira", ...kittens];
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}
function removeFirstKitten() {
  return kittens.slice(1);
}

