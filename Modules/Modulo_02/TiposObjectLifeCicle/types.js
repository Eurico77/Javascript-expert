"1" == 1; //true
"1" === 1; // false

console.assert(String(123) === "123", "convsersão explicita para string");
console.assert(123 + "" === "123", "convsersão implicita para string");

console.assert(
  ("hello" || 123) === "hello",
  "|| retorna o primeiro elemento se os dois forem true"
);

console.assert(
  ("hello" && 123) === "hello",
  "|| retorna o ultimo elemento se os dois forem true"
);

