

$(document).ready(function () {
  $("#send").click(function () {
    //send to post route (fetch)
   const chirp = { user: $("#user").val(), message: $("#message").val()}
   postChirp(chirp)
   addChirp(chirp)
  });

  getChirps()

});



function addChirp(chirps) {
  console.log(chirps)
  $('#chirps').append(`<h4> ${chirps.user} </h4> <p> ${chirps.message} </p>`)
}
// //fetch request /api/chirps, create elememnts in html that 
// //hold whatever li created here  


function getChirps() {
  jQuery.get('/api/chirps', (data) => {
    let dataArray = Object.values(data);
    console.log(dataArray);
  });
}

function postChirp(chirp) {
  $.post('/api/chirps', chirp)
}

