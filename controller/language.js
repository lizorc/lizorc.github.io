const messages = {
  es: {
    greeting: "!Bienvenido!",
    description: "Este sitio esta en construcción.",
  },
  en: {
    greeting: "Welcome!",
    description: "This site is under construction.",
  }
}; 

function changeLanguage(lang) {
  document.getElementById('greeting').textContent = messages[lang].greeting;
  document.getElementById('description').textContent = messages[lang].description;
}
  