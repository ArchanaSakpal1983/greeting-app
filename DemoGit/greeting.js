function greet(name, lang = "en") {
  if (lang === "es") {
    return `Hola, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("World"));
console.log(greet("Mundo", "es"));