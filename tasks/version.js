const Fs = require("fs");
const Path = require("path");
const version = require("../package.json").version;

const dryRunFlag = new Set(["-n", "--dry-run"]);

async function main(dryRun = false) {
  console.log(`Version: ${version}`);

  const stdout = process.stdout;
  const pkgPath = Path.resolve(__dirname, "..", "packages");

  Fs.readdirSync(pkgPath).forEach(p => {
    const pkgFile = Path.join(pkgPath, p, "package.json");
    const pkgContent = Fs.readFileSync(pkgFile, "utf-8");
    const pkg = JSON.parse(pkgContent);

    if (version !== pkg.version) {
      stdout.write(`Bump ${pkg.name}: ${pkg.version} -> ${version}`);

      pkg.version = version;

      if (!dryRun) {
        Fs.writeFileSync(pkgFile, JSON.stringify(pkg, null, 2), "utf-8");
        stdout.write(" [written]");
      }

      stdout.write("\n");
    }
  });
}

if (require.main === module) {
  main(dryRunFlag.has(process.argv[2])).catch(e => {
    console.error(e);
    process.exit(1);
  });
}
