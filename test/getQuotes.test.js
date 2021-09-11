import GetQuotes from "../getQuotes";

describe("getQuotes", () => {
  it("should be a function", () => {
    expect(typeof GetQuotes).toEqual("function");
  }),
    it("should return an object", async () => {
      const result = await GetQuotes();
      expect(typeof result).toBe("object");
    });
  it("should return a promise", () => {
    expect(GetQuotes()).resolves.toEqual({
      name: "joe",
    });
  });
});
