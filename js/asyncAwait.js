
const movies=[
    {id:1,title:"Bagubali",director:"nolan",year:2010},
    {id:2,title:"joker",director:"DK",year:2015},
    {id:3,title:"kanguva",director:"Mk",year:2017}
]

async function loadMovies(){
    const moveslist=document.getElementById('movie-list');
    moveslist.innerHTML=`<p>loading....</p>`;
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
            moveslist.innerHTML=movies.map((x)=>`<p>${x.title}--${x.director}-${x.year}`)
            .join("")
        },2000);
    })
}
