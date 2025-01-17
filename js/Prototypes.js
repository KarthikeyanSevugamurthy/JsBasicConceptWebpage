function usePrototype() {
    function Movie(title) {
        this.title = title;
    }

    Movie.prototype.getDetails = function () {
        return `Movie: ${this.title}`;
    };

    const movie = new Movie("Bagubali");
    document.getElementById("prototype-output").innerHTML = movie.getDetails();
}
