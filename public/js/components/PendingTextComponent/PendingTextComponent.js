import Component from "../Component.js";

class PendingTextComponent extends Component {
  text;

  constructor(parentElement, className, textContent) {
    super("p", className, parentElement);
    this.text = textContent;
  }
}

export default PendingTextComponent;
