/* eslint-disable no-new */
import RatingComponent from "../RatingComponent/RatingComponent.js";
import Component from "../Component.js";

class MovieCardComponent extends Component {
  movie;
  constructor(parentElement, movie) {
    super("li", "serie", parentElement);
    this.movie = movie;
    this.render();
  }

  render() {
    this.element.innerHTML = `
                <img
                  class="serie__poster"
                  src="${this.movie.poster}"
                  alt="${this.movie.name} poster"
                />
                <h4 class="serie__title">${this.movie.name}</h4>
                <p class="serie__info">${this.movie.creator} (${this.movie.year})</p>
                <div class="rating">
                </div>
                <i class="fas fa-times-circle icon--delete"></i>              
    `;
    const parentRating = this.element.querySelector("div.rating");
    new RatingComponent(parentRating, this.movie.score, this.onRating);
  }

  onRating(score) {
    this.movie = { ...this.movie, score };
  }
}

export default MovieCardComponent;
