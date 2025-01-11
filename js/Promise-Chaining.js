function getMovieDetails() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("BaguBali"), 3000);
    });

    promise
        .then((movie) => {
            document.getElementById("promise-output").innerHTML = `Movie Name: ${movie}`;
            return `${movie} directed by  MK`;
        })
        .then((details) => {
            document.getElementById("promise-output").innerHTML += `<br>Details: ${details}`;
        });
}
