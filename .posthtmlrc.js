module.exports = {
  plugins: {
    "posthtml-pug": { locals: require("./tasks/doc") },
    "posthtml-inline-svg": {}
  }
};
