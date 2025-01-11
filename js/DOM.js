function addMovie() {
    const movieList = document.getElementById("movie-list2");
    const dom=document.getElementById("dom-output")
    const newMovie = document.createElement("li");
    newMovie.textContent = "Spider-Man"; 
    movieList.appendChild(newMovie); 
    dom.innerHTML=`<p>movie added</p>`;
}
