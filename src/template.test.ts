import { template } from "./template";

describe("template", () => {
  const data = {
    NAME: "Bob",
    AGE: "18",
    items: ["1", "2", "3", "4"],
  };

  describe("template", () => {
    it("puts data into placeholders", () => {
      expect(template("Hi, {{NAME}}", data)).toBe("Hi, Bob");
    });

    it("puts empty string into placeholders in no data provided", () => {
      expect(template("Hi, {{NAME}} {{SURNAME}}", data)).toBe("Hi, Bob ");
    });

    it("replaces all placeholders", () => {
      expect(template("Hi, {{NAME}}. My name is {{NAME}} too", data)).toBe(
        "Hi, Bob. My name is Bob too"
      );
    });
    it("puts values from list elements inside loop", () => {
      expect(template("{{for items}}{{items}}{{endfor}}", data)).toBe(
        "1,2,3,4"
      );
    });
  });
});
