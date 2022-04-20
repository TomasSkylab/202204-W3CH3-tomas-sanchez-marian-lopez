class Component {
  element;

  constructor(item, className, parentElement) {
    this.element = document.createElement(item);
    this.element.className = className;
    parentElement.append(this.element);
  }
}
export default Component;
