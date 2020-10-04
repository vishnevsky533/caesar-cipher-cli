const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const TransformStream = require("./transform");
const argv = require("minimist")(process.argv.slice(2));
console.log("Hello, it's started with options: ", argv);

const source = require("./parseOptions")(argv);
if (source) {
  const { shift, input, output, action } = source;
  try {
    if (input) {
      fs.accessSync(
        `${path.join(__dirname, input)}`,
        fs.constants.F_OK | fs.constants.R_OK
      );
      if (fs.statSync(path.join(__dirname, input)).isDirectory()){
        throw new Error('1');
      }
    }
    if (output) {
      fs.accessSync(
        `${path.join(__dirname, output)}`,
        fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK
      );
      if (fs.statSync(path.join(__dirname, output)).isDirectory()){
        throw new Error('1');
      }
    }
    const readStream = input
      ? fs.createReadStream(path.join(__dirname, input))
      : process.stdin;
    const writeStream = output
      ? fs.createWriteStream(path.join(__dirname, output), { flags: "a+" })
      : process.stdout;

    const transformStream = new TransformStream({ shift, action });
    pipeline(readStream, transformStream, writeStream, err => {
      if (err) {
        console.error(err);
      }
    });
  } catch (err) {
    process.on("exit", () => {
      process.stderr.write(`Some problem with files\n`);
      console.error(`Exiting with code: ${10}`);
      process.exit(10);
    });
  }
}
