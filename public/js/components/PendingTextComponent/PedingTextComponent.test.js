/* eslint-disable no-new */
import PendingTextComponent from "./PendingTextComponent.js";

describe("Given a PendingTextComponent component", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  describe("When instantiated", () => {
    test("Then it should create a p element", () => {
      const newParagraph = new PendingTextComponent(container, "", "");
      const expectedElementType = "P";

      const newElementType = newParagraph.element.nodeName;

      expect(newElementType).toBe(expectedElementType);
    });
  });

  describe("When it`s recieved a 'You have 4 series pending to watch'", () => {
    test("Then it should show 'You have 4 series pending to watch'", () => {
      const text = "You have 4 series pending to watch";
      const expectedText = '<p class="You have 4 series pending to watch"></p>';

      new PendingTextComponent(container, text);

      const testElement = container.innerHTML;

      expect(testElement).toBe(expectedText);
    });
  });
});
