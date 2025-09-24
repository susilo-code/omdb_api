// $('.search-button').on('click',function (){
//     $.ajax({
//         url:"http://www.omdbapi.com/?apikey=5fba34ec&s=" + $('.input-keyword').val(),
//         success : results => {
//             const movies = results.Search;
//             let cards ='';
//             movies.forEach(m => {
//                 cards += showCards(m);
//                 });
//                 $('.movie-container').html(cards);
//                 // ketika tombol detail diklik
//                 $('.modal-dtl-button').on('click',function (){
//                     $.ajax({
//                            url:"http://www.omdbapi.com/?apikey=5fba34ec&i=" +  $(this).data('imdbid'),
//                                success : m => {
//                                    const movieDetail = showMovieDetail(m);
//                        $('.modal-body').html(movieDetail);
//                    },
//                        error : (e) => {
//                        console.log(e.responseText);
//                    }
//                });
//                })
//             },
//             error : (e) => {
//                 console.log(e.responseText);
//             }
//         });

// })


// fetch
const searchButton = document.querySelector('.search-button');
const inputKeyword = document.querySelector('.input-keyword');
searchButton.addEventListener('click',function(){
  fetch('http://www.omdbapi.com/?apikey=5fba34ec&s=' + inputKeyword.value)
  .then(response => response.json())
  .then(response => console.log(response));
})

        
function showCards(m){
    return `<div class="col-md-4 my-3">
                <div class="card" >
                    <img src="${m.Poster}" class="card-img-top" height="450">
                    <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-dtl-button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                  </div>
                </div>`;
};

function showMovieDetail(m){
    return `<div class="container-fluid">
                     <div class="row">
                       <div class="col-md-3">
                         <img src="${m.Poster}" class="img-fluid">
                       </div>
                       <div class="col-md">
                         <ul class="list-group">
                           <li class="list-group-item"><h4>${m.Title} (${m.Year}) </h4></li>
                           <li class="list-group-item"><strong>Director : </strong> ${m.Director}</li>
                           <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                           <li class="list-group-item"><strong>Writer : </strong> ${m.Writer}</li>
                           <li class="list-group-item"><strong>Plots : </strong> <br>${m.Plot}</li>
                         </ul>
                       </div>
                     </div>
                   </div>`;
}