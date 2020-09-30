const { encode, encodeString, decode, decodeString } = require("./encryption");

test("Characters should encrypt correctly", () => {
  expect(encode("d", 1)).toBe("e");
  expect(encode("d", -1)).toBe("c");
  expect(encode("d", 25)).toBe("c");
  expect(encode("d", -25)).toBe("e");
  expect(encode("d", -26)).toBe("d");
  expect(encode("w", -26)).toBe("w");
    expect(encode("W", -26)).toBe("W");
  expect(encode("-", 1)).toBe("-");
});

test("Characters should decrypt correctly", () => {
    expect(decode("e", 1)).toBe("d");
    expect(decode("c", -1)).toBe("d");
    expect(decode("c", 25)).toBe("d");
    expect(decode("e", -25)).toBe("d");
    expect(decode("d", -26)).toBe("d");
    expect(decode("w", -26)).toBe("w");
    expect(decode("W", -26)).toBe("W");
    expect(decode("-", 1)).toBe("-");
});

test("String should encrypt correctly", () => {
  expect(encodeString("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
  expect(encodeString("This is secret. Message about \"_\" symbol!", 7)).toBe(
        "Aopz pz zljyla. Tlzzhnl hivba \"_\" zftivs!"
    );
});

test("String should decrypt correctly", () => {
    expect(decodeString("efgfoe uif fbtu xbmm pg uif dbtumf", 1)).toBe(
        "defend the east wall of the castle"
    );
    expect(decodeString("Aopz pz zljyla. Tlzzhnl hivba \"_\" zftivs!", 7)).toBe(
        "This is secret. Message about \"_\" symbol!"
    );
});
