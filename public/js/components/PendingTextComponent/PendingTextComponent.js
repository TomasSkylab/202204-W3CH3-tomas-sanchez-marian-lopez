import Component from "../Component.js";

class PendingTextComponent extends Component {
  text;

  constructor(parentElement, className, text) {
    super("p", className, parentElement);
    this.element.textContent = text;
  }
}

export default PendingTextComponent;
