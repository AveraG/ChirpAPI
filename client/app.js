var express = require('express')
let router = express.Router();

$(document).ready(function () {
  $("#send").click(function () {
    //send to post route (fetch)
   const chirp = { user: $("#user").val(), message: $("#message").val()}
   postChirp(chirp)
  });

  getChirps()

});



function addChirp(chirps) {
  $('#chirps').append(`<h4> ${chirps.user} </h4> <p> ${chirps.tweet} </p>`)
}
//fetch request /api/chirps, create elememnts in html that 
//hold whatever li created here  


function getChirps() {
  router.get('http://localhost:3000/api/chirps', (data) => {
      data.forEach(addChirp);
  })
}

function postChirp(chirp) {
  router.post('http://localhost:3000/api/chirps', chirp)
}

