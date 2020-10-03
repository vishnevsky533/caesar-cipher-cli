module.exports = args => {
  const formatArgs = {
    shift: typeof args.s === "undefined" ? args.shift : args.s,
    action: args.a || args.action,
    input: args.i || args.input,
    output: args.o || args.output
  };
  const action = formatArgs.action;
  if (
    !action ||
    typeof formatArgs.shift === "undefined" ||
    (action !== "decode" && action !== "encode") ||
    !Number.isInteger(+formatArgs.shift)
  ) {
    process.stderr.write('Invalid options "action" or "shift"\n');
    process.on("exit", () => {
      console.log(`Exiting with code: ${5}`);
      process.exit(5);
    });
    return null;
  }

  if (!formatArgs.input) {
    console.log("Input text, press ctrl+C for exit");
  }
  return formatArgs;
};
