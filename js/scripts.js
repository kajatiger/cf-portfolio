// twitter button footer
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');



$(document).ready(function(){
  // your code goes here
  //alert("Document is ready!")
  // $(".form-control").css("border", "2px solid red");
  $(".form-control").css("background", "#f9e2f8")
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
  $("#button").on('click', function() {
  // now we're going to work in here
  // more code here
  $('#button').on('click', function() {
  var comment = $('.form-control').val();
  $('#visible-comment').html(comment);
  $('form-control').hide();
  return false;
	});

  console.log('clicked');
  return false;
  //no more code here
	});

  //textarea background

});
