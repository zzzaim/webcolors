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
  const paletteFiles = Fs.readdirSync(
    Path.resolve(__dirname, "palettes", name)
  );

  paletteFiles.forEach(file => {
    if (!file.endsWith(".js")) {
      return;
    }

    const path = Path.resolve(__dirname, "palettes", name, file);
    const palette = require(path);
    const author = palette.meta && palette.meta.author;

    if (author) {
      contributors.push(
        typeof author === "string" ? parseAuthor(author) : author
      );
    }
  });
});

// Also normalize main 'author' field to object
if (typeof pkg.author === "string") {
  pkg.author = parseAuthor(pkg.author);
}

const json = JSON.stringify({ ...pkg, contributors }, null, 2) + "\n";

if (process.argv[2] === "-n") {
  console.log(json);
  process.exit();
}

Fs.writeFileSync(require.resolve("../package.json"), json, "utf-8");
