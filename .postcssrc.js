module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")({
      flexbox: "no-2009"
    })
  ]
};
