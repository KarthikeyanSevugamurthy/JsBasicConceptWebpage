
function simulateEventLoop()
{
    console.log("movies list in event loop");
    const moveslist=document.getElementById("movie-list1");
    const firstMovie=document.createElement('li');
    firstMovie.textContent="Bagupali (Synchronous)";
    moveslist.append(firstMovie);
    console.log("first movie add");

    setTimeout(()=>{
        const secondMovie=document.createElement('li');
        secondMovie.textContent="Joker (Asynchronous)";
        moveslist.append(secondMovie);
        console.log("second movie add");
    },2000)

    const thirdMovie=document.createElement('li');
    thirdMovie.textContent="Kaguva (Synchronous)";
    moveslist.append(thirdMovie);
    console.log("third movie add");
}