const parse = require("./parseOptions");

test("It should transform to new object", () => {
  expect(
    parse({ a: "decode", s: 5, i: "c:/input.txt", o: "./output.txt" })
  ).toEqual({
    action: "decode",
    shift: 5,
    input: "c:/input.txt",
    output: "./output.txt",
  });
  expect(
    parse({ a: "decode", shift: 5, i: "c:/input.txt", o: "./output.txt" })
  ).toEqual({
      action: "decode",
      shift: 5,
      input: "c:/input.txt",
      output: "./output.txt",
  });
  expect(
    parse({ a: "decode", s: 5, input: "c:/input.txt", o: "./output.txt" })
  ).toEqual({
      action: "decode",
      shift: 5,
      input: "c:/input.txt",
      output: "./output.txt",
  });
  expect(
    parse({ action: "decode", s: 5, i: "c:/input.txt", output: "./output.txt" })
  ).toEqual({
      action: "decode",
      shift: 5,
      input: "c:/input.txt",
      output: "./output.txt",
  });
  expect(
    parse({ a: "decode", shift: 5, input: "c:/input.txt", o: "./output.txt" })
  ).toEqual({
      action: "decode",
      shift: 5,
      input: "c:/input.txt",
      output: "./output.txt",
  });
});
test("It should check for required options", () => {
  expect(
    parse({ a: "decode", i: "c:/input.txt", o: "./output.txt" })
  ).toBeNull();
    expect(
        parse({ a: "code", i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
    expect(
        parse({ s: "5", i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
    expect(
        parse({ a: "decode", s: "tt", i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
    expect(
        parse({ a: "decode", s: "3.5", i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
    expect(
        parse({ a: "decode", s: "3,5", i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
    expect(
        parse({ i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
    expect(
        parse({ a: "decode", shift: "tt", i: "c:/input.txt", o: "./output.txt" })
    ).toBeNull();
});