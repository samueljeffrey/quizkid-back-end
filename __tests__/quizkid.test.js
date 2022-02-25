const assert = require("assert");

describe("Array", () => {
  describe("indexOf", () => {
    it("should return -1 when no value", () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
