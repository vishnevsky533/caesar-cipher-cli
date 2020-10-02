module.exports = (args) => {
  const formatArgs = {
    shift: args.s || args.shift,
    action: args.a || args.action,
    input: args.i || args.input,
    output: args.o || args.output,
    error: false
  };
  const action = formatArgs.action;
  if (
    !action ||
    !formatArgs.shift ||
    (action !== "decode" && action !== "encode") ||
    !Number.isInteger(+formatArgs.shift)
  ) {
    process.stderr.write('Invalid options "action" or "shift"\n');
    process.on("exit", () => {
      console.log(`Exiting with code: ${5} (warning)`);
      process.exit(5);
    });
    return null;
  }
  return formatArgs;
};
