#!/usr/bin/env node

// This script adds palettes' author names to main contributor list
// Overwrites the main package.json file!

const Fs = require("fs");
const Path = require("path");
const parseAuthor = require("parse-author");
const pkg = Object.assign({}, require("../package.json"));

const palettes = Fs.readdirSync(Path.resolve(__dirname, "palettes"));
const contributors = [];

palettes.forEach(name => {
  const palette = require(`./palettes/${name}`);
  const author = palette.meta && palette.meta.author;

  if (author) {
    contributors.push(
      typeof author === "string" ? parseAuthor(author) : author
    );
  }
});

// Also normalize main 'author' field to object
if (typeof pkg.author === "string") {
  pkg.author = parseAuthor(pkg.author);
}

Fs.writeFileSync(
  require.resolve("../package.json"),
  JSON.stringify(Object.assign(pkg, { contributors }), null, 2) + "\n",
  "utf-8"
);
