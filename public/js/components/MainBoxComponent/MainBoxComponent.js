/* eslint-disable no-new */
import series from "../../series.js";
import Component from "../Component.js";
import MovieCardComponent from "../MovieComponent/MovieComponent.js";
import PendingTextComponent from "../PendingTextComponent/PendingTextComponent.js";

class MainBoxComponent extends Component {
  constructor(parentElement) {
    super("div", "container", parentElement);
    this.element.innerHTML = `
    <header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>
    `;
    const pendingToWatch = document.querySelector(".series-pending");

    new PendingTextComponent(
      pendingToWatch,
      "info",
      "You have 4 series pending to watch"
    );
    series.forEach((movie) => {
      if (!movie.watched) {
        const pendingSeries = document.querySelector(".series-list");
        new MovieCardComponent(pendingSeries, movie);
      }
      if (movie.watched) {
        const watchedSeries = document.querySelector(
          ".series-list.series-list--watched"
        );
        new MovieCardComponent(watchedSeries, movie);
      }
    });
  }
}

export default MainBoxComponent;
