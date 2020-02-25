// Palette's specially-named colors:
const named = {
  beekeeper: "#f6e58d",
  blurple: "#4834d4",
  carminePink: "#eb4d4b",
  coastalBreeze: "#dff9fb",
  deepCove: "#130f40",
  deepKoamaru: "#30336b",
  exodusFruit: "#686de0",
  greenlandGreen: "#22a6b3",
  heliotrope: "#e056fd",
  hintOfIcePack: "#c7ecee",
  juneBud: "#badc58",
  middleBlue: "#7ed6df",
  pinkGlamour: "#ff7979",
  pureApple: "#6ab04c",
  quinceJelly: "#f0932b",
  soaringEagle: "#95afc0",
  spicedNectarine: "#ffbe76",
  steelPink: "#be2edd",
  turbo: "#f9ca24",
  wizardGrey: "#535c68"
};

// Map of the above specially-named colors to its equivalent CSS2 color:
const css = {
  aqua: named.middleBlue,
  black: null,
  blue: named.blurple,
  fuchsia: named.heliotrope,
  gray: named.soaringEagle,
  green: named.pureApple,
  lime: named.juneBud,
  maroon: named.carminePink,
  navy: named.deepCove,
  olive: named.quinceJelly,
  orange: named.turbo,
  purple: named.steelPink,
  red: named.pinkGlamour,
  silver: named.hintOfIcePack,
  teal: named.lightGreenishBlue,
  white: named.coastalBreeze,
  yellow: named.beekeeper
};

module.exports = {
  ...named,
  ...css
};

// Palette name, description and author:
Object.defineProperty(module.exports, "meta", {
  value: {
    name: "flatui/aussie",
    description: "Flat UI Aussie Palette",
    author: "Kate Hoolahan (http://dribbble.com/hoolah)"
  }
});
