function triggerFavoriteMovieEvent() {
    const event = new CustomEvent("favoriteMovie", { detail: { movie: "BaguBali" } });

    document.addEventListener("favoriteMovie", (e) => {
        document.getElementById("custom-event-output").innerHTML = `Your favorite movie is: ${e.detail.movie}`;
    });

    document.dispatchEvent(event);
}
