import PendingTextComponent from "./PendingTextComponent.js";

describe("Given a PendingTextComponent component", () => {
  describe("When it is instantiated", () => {
    test("Then it should create a p element", () => {
      const container = document.createElement("div");
      const newParagraph = new PendingTextComponent(container, "", "");
      const expectedElementType = "P";

      const newElementType = newParagraph.element.nodeName;

      expect(newElementType).toBe(expectedElementType);
    });
  });
});
