module.exports = {
  plugins: [
    require("tailwindcss")("./.tailwindrc.js"),
    require("autoprefixer")({
      flexbox: "no-2009"
    })
  ]
};
