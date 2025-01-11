function simulateGarbageCollection() {
    console.log("Starting Garbage Collection Simulation...");
    let movie = {
        title: "bagupali",
        director: "MK",
        releaseYear: 2010,
    };
    console.log("Movie Object Created:", movie);
    console.log(`Now watching: ${movie.title}, directed by ${movie.director} (${movie.releaseYear})`);
    document.getElementById("garbage").innerHTML=`<p>Now watching: ${movie.title}, directed by ${movie.director} (${movie.releaseYear})</p>`
    movie = null;
    console.log("Movie Object set to null. It is now eligible for garbage collection.");
    setTimeout(() => {
        console.log("Garbage Collector has cleaned up the memory occupied by the movie object.");
        document.getElementById("garbage").innerHTML=`<p>Null</p>`
    }, 3000);
}


