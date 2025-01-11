function validateMovieRating() {
    const movie = { rating: 0 };

    const handler = {
        set(target, prop, value) {
            if (prop === "rating" && (value < 0 || value > 10)) {
                document.getElementById("proxy-output").innerHTML = `Invalid rating: ${value}`;
                return false;
            }
            target[prop] = value;
            document.getElementById("proxy-output").innerHTML = `Valid rating: ${value}`;
            return true;
        },
    };

    const movieProxy = new Proxy(movie, handler);

    movieProxy.rating = 8; // Valid
    movieProxy.rating = 15; // Invalid
}
