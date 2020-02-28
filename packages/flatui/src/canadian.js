// Palette's specially-named colors:
const named = {
  amour: "#ee5253",
  aquaVelvet: "#01a3a4",
  bleuDeFrance: "#2e86de",
  bluebell: "#341f97",
  casandoraYellow: "#ff9ff3",
  cyanite: "#0abde3",
  darkMountainMeadow: "#ee5253",
  doubleDragonSkin: "#0abde3",
  fuelTown: "#576574",
  imperialPrimer: "#222f3e",
  jadeDust: "#00d2d3",
  jigglyPuff: "#ff6b6b",
  joustBlue: "#54a0ff",
  lianHongLotusPink: "#0abde3",
  lightBlueBallerina: "#c8d6e5",
  megaman: "#ff6b6b",
  nasuPurple: "#5f27cd",
  pastelRed: "#feca57",
  stormPetrel: "#8395a7",
  wildCaribbeanGreen: "#48dbfb"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.megaman,
  black: named.imperialPrimer,
  blue: named.bleuDeFrance,
  fuchsia: named.lianHongLotusPink,
  gray: named.stormPetrel,
  green: named.darkMountainMeadow,
  lime: named.wildCaribbeanGreen,
  maroon: named.amour,
  navy: named.bluebell,
  olive: null,
  orange: named.doubleDragonSkin,
  purple: named.nasuPurple,
  red: named.pastelRed,
  silver: named.lightBlueBallerina,
  teal: named.aquaVelvet,
  white: null,
  yellow: named.casandoraYellow
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/canadian",
    description: "Flat UI Canadian Palette",
    author: "Dmitri Litvinov (http://dribbble.com/dmitrilitvinov)"
  }
});
