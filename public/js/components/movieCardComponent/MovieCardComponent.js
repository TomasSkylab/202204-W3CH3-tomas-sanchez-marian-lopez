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
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete"></i>
              
    `;
  }
}

export default MovieCardComponent;
