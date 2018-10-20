const path = require("path");
const fs = require("fs");
const pokemon = require("./pokemon-json");

let includedPokemon = [];
function getRegion(p) {
  if (p <= 151) return "Kanto";
  if (p > 151 && p <= 251) return "Johto";
  if (p > 251 && p <= 386) return "Hoenn";
  if (p > 386 && p <= 493) return "Sinnoh";
  if (p > 493 && p <= 649) return "Unova";
  if (p > 649 && p <= 721) return "Kalos";
}

const formated = pokemon.reduce((acc, pokemon) => {
  if (!includedPokemon.includes(pokemon.slug)) {
    includedPokemon = [...includedPokemon, pokemon.slug];
    return [
      ...acc,
      {
        name: pokemon.name,
        sprite: pokemon.ThumbnailImage,
        key: pokemon.id.toString(),
        number: pokemon.number,
        region: getRegion(pokemon.id)
      }
    ];
  }

  return acc;
}, []);

fs.writeFileSync(
  path.join(__dirname, "src", "pokemon.js"),
  `export default ${JSON.stringify(formated)}`
);
