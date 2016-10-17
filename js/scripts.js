// twitter button footer
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//GOOGLE MAP ZOOM
function initMap() {
  var myLatLng = {lat: 52.4965527, lng: 13.3924497};


  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 14
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Find Me Here!'
  });
}


$(document).ready(function(){
  // your code goes here
  //alert("Document is ready!")
  // $(".form-control").css("border", "2px solid red");
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $.stellar();
  $(window).stellar();
    // or:
  $('#main').stellar()

  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
    $('#item1').tooltip();
  });

  // EVENT LISTENER
  $('#button').on('click', function() {
  var comment = $('.form-control').val();
  $('#visible-comment').html(comment);
  if (comment == "") {
    $(".form-control").css("border", "2px solid red");

  } else {
    $(".form-control").hide();
  };

  console.log('clicked');
  
  //EMAIL VALIDATION still doesnt work
    var valEmail = $('#email').val();
    var regular = new regExp('\A\w+\S+[@]\w+\S+[.]\w+\S+\z');
    if(valEmail = regular.test(str)) {
      true
      console.log(valEmail)
    } else {
      console.log(false)
      $('#email').css("color", "red")
      return false;
    };

	});

  //textarea background
  $(".form-control").css("background", "#f9e2f8")

  // TEXTAREA CHARACTER COUNT
  $("#message").on("keyup", function() {
    console.log("keyup happened");
    var charCount = $("#message").val().length;
    console.log(charCount);
    if(charCount > 50) {
      $("#message").css("color", "red");
    } else {
      $("#message").css("color", "black");
    };
  });

  


  // work section
  for(var i = 0; i < works.length; ++i ) {
    $('#work').append('\
      <div class="col-xs-6 col-md-3"> \
        <a href="'+ works[i].url +'" class="work-img">\
          <img class="img-responsive" src="' + works[i].pic + '">\
          <span class="info"><p class="proj-title">Title:</p>"'+ works[i].title +'"</span>\
        </a> \
      </div> \
      ');
    var images = $('#work img');
    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };

  };
  $(".work-img").mouseenter( function() {
    console.log(this);
    $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });


}); //document ready end
