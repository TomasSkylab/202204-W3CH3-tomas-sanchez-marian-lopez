import Component from "../Component.js";

class RatingComponent extends Component {
  movie;
  constructor(parentElement, movie) {
    super("ul", "score", parentElement);
    this.movie = movie;

    for (let i = 1; i <= 5; i++) {
      const li = document.createElement("li");
      li.className = "score__star";
      this.element.append(li);
      const icon = document.createElement("i");
      icon.className =
        movie.score >= i ? "icon--score fas fa-star" : "icon-score far fa-star";
      icon.title = `${i}/5`;
      icon.addEventListener("click", () => {
        // eslint-disable-next-line no-param-reassign
        movie.score = i;
        icon.className =
          movie.score >= i
            ? "icon--score fas fa-star"
            : "icon-score far fa-star";
      });
      li.append(icon);
    }
  }
}
export default RatingComponent;
