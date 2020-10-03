const { code, codeString, } = require("./encryption");

test("Characters should encrypt correctly", () => {
  expect(code("d", 1)).toBe("e");
  expect(code("d", -1)).toBe("c");
  expect(code("d", 25)).toBe("c");
  expect(code("d", -25)).toBe("e");
  expect(code("d", -26)).toBe("d");
  expect(code("w", -26)).toBe("w");
    expect(code("W", -26)).toBe("W");
  expect(code("-", 1)).toBe("-");
});


test("String should encrypt correctly", () => {
  expect(codeString("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
  expect(codeString("This is secret. Message about \"_\" symbol!", 7)).toBe(
        "Aopz pz zljyla. Tlzzhnl hivba \"_\" zftivs!"
    );
});
