async function getMovie() {

    let yourKey="5326bb0c";

    let movieName=document.getElementById("search-bar").value;

    let url=`https://www.omdbapi.com/?t=${movieName}&apikey=${yourKey}`;

    let response= await fetch(url);

    let data= await response.json();

    if(data.Response=="False"){
        alert("Movie not found/Invalid Name/Still not added in our database");
        return;
    }
    console.log(data);
    if(data.Poster!=="NA"){
    document.getElementById('movie_image').style.backgroundImage=`url('${data.Poster}')`;
    }


    document.getElementById('title-content').innerText=data.Title;
    document.getElementById('year-content').innerText=data.Year;
    document.getElementById('runtime-content').innerText=data.Runtime;
    document.getElementById('genre-content').innerText=data.Genre;
    document.getElementById('director-content').innerText=data.Director;
    document.getElementById('imdb-content').innerText=data.Ratings[0].Value;
    document.getElementById('plot-content').innerText=data.Plot;

    document.getElementById('movie-image').innerText=data.Title;
    
}