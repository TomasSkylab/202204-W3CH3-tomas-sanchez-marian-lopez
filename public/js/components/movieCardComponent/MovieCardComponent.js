/* eslint-disable no-new */
import RatingComponent from "../../ratingComponent/RatingComponent.js";
import Component from "../Component.js";

class MovieCardComponent extends Component {
  movie;
  constructor(parentElement, movie) {
    super("li", "serie", parentElement);
    this.movie = movie;
    this.element.innerHTML = `
                <img
                  class="serie__poster"
                  src="${movie.poster}"
                  alt="${movie.name} poster"
                />
                <h4 class="serie__title">${movie.name}</h4>
                <p class="serie__info">${movie.creator} (${movie.year})</p>
                <div class="rating">
                </div>
                <i class="fas fa-times-circle icon--delete"></i>              
    `;
    const parentRating = this.element.querySelector("div.rating");
    new RatingComponent(parentRating, movie);
  }
}

export default MovieCardComponent;
