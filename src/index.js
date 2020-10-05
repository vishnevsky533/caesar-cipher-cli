const fs = require("fs");
const { pipeline } = require("stream");
const colors = require('colors');
const TransformStream = require("./transform");

const argv = require("minimist")(process.argv.slice(2));
console.log("Hello, it's started with options: ", argv);

const source = require("./parseOptions")(argv);
if (source) {
  const { shift, input, output, action } = source;
  try {
    if (input) {
      fs.accessSync(
        `${input}`,
        fs.constants.F_OK | fs.constants.R_OK
      );
      if (fs.statSync(input).isDirectory()){
        throw new Error('1');
      }
    }
    if (output) {
      fs.accessSync(
        `${output}`,
        fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK
      );
      if (fs.statSync(output).isDirectory()){
        throw new Error('1');
      }
    }
    const readStream = input
      ? fs.createReadStream(input)
      : process.stdin;
    const writeStream = output
      ? fs.createWriteStream(output, { flags: "a+" })
      : process.stdout;

    const transformStream = new TransformStream({ shift, action });
    pipeline(readStream, transformStream, writeStream, err => {
      if (err) {
        console.error(err);
      } else {
        if (input){
          console.log('Success!'.green)
        }
      }
    });
  } catch (err) {
    process.on("exit", () => {
      process.stderr.write(`Some problem with files\n`.yellow);
      console.error(`Exiting with code: ${10}`.red);
      process.exit(10);
    });
  }
}
