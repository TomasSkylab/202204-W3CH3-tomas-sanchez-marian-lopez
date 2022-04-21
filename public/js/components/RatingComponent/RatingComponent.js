import Component from "../Component.js";

class RatingComponent extends Component {
  score;
  constructor(parentElement, score, action) {
    super("ul", "score", parentElement);
    this.socre = score;
    this.action = action;
    this.render();
    this.addListener();
  }

  render() {
    this.element.innerHTML = `<ul class="score">
                  <li class="score__star">
                    <i class="${
                      this.score >= 1
                        ? "icon--score fas fa-star"
                        : "icon-score far fa-star"
                    }" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="${
                      this.score >= 2
                        ? "icon--score fas fa-star"
                        : "icon-score far fa-star"
                    }" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="${
                      this.score >= 3
                        ? "icon--score fas fa-star"
                        : "icon-score far fa-star"
                    }" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="${
                      this.score >= 4
                        ? "icon--score fas fa-star"
                        : "icon-score far fa-star"
                    }" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="${
                      this.score >= 5
                        ? "icon--score fas fa-star"
                        : "icon-score far fa-star"
                    }" title="5/5"></i>
                  </li>
                </ul`;
  }

  addListener() {
    const icons = this.element.querySelectorAll("i");
    icons.forEach((icon, index) => {
      icon.addEventListener("click", () => {
        this.score = index + 1;
        this.render();
        this.addListener();
        this.action(this.score);
      });
    });
  }
}
export default RatingComponent;
