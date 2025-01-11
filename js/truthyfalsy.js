function checkMovieDetails() {
    const movies=[
        {id:1,title:"Bagubali",director:"nolan",year:2010},
        {id:2,title:"joker",director:"DK",year:2015},
        {id:3,title:"kanguva",director:"Mk",year:2017}
    ]


    const movieName = prompt("Enter the movie name:");

    if (movieName) { 
        const s=movies.find(x=>x.title.toLowerCase()===movieName.toLowerCase());
 
        if (s) {
            alert(`Movie Found!\nTitle: ${s.title}\nDirector: ${s.director}\nYear: ${s.year}`);
        } else {
          
            alert("Movie not found! Please check the name and try again.");
        }
    } else {
       
        alert("You didn't enter a movie name.");
    }
}
