//First
for (let i = 1000; i >= 0; i-=2) {
    console.log(i);
}

//Second
for (let i = 0; i <= 10000; i++) {
    if (i === 2500) {
        alert("A quarter of the way there!");
    } else if (i === 5000) {
        alert("Halfway there!");
    } else if (i === 10000){
        alert("The loop is done!");
    }
} 

//Third
const tvShows = ["Better Call Saul", "Breaking Bad", "Avatar: The Last Airbender", "Game of Thrones", "The Office"];
for (let i = 0; i < tvShows.length; i++) {
    console.log('My #' + (i + 1) + ' favorite tv show is ' + tvShows[i]);
}