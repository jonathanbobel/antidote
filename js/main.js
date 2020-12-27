$(document).ready(function() {
  $(this).scrollTop(0);

  $("nav.main a , .jumbotron.first a").bind("click", function(event) {
    event.preventDefault();
    $(this).blur();
    var target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 215
        },
        1000,
        "easeInOutExpo"
      );
  });

  if (window.scrollY > 50) {
    $("nav.navbar").addClass("top");
  }

  var $sH2 = $(".top"), // Store all the h2 (with backgrounds)
    yPos = [], // Will store all the y coord
    $window = $(window); // Reference to the window

  // Store all the y coords
  $sH2.each(function(i) {
    yPos[i] = $(this).offset().top;
  });

  $window.scroll(function() {
    var isActive;

    $sH2.each(function(i) {
      if ($window.scrollTop() + 250 >= yPos[i]) isActive = i;
      $("nav.navbar").addClass("top");

      if (isActive != null) {
        $("nav.main li a").removeClass("selected");
        $("nav.main li a")
          .eq(isActive)
          .addClass("selected");
      }
      if ($window.scrollTop() < 50) {
        $("nav.main li a").removeClass("selected");
        $("nav.main li.about a").addClass("selected");
        $("nav.navbar").removeClass("top");
      }
      if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("nav.main li a").removeClass("selected");
        $("nav.main li.contact a")
          .eq(0)
          .addClass("selected");
      }
    });
  });

  //Convert address tags to google map links
  $("address").each(function() {
    var link =
      "<a href='http://maps.google.com/maps?q=" +
      encodeURIComponent($(this).text()) +
      "' target='_blank'>" +
      $(this).text() +
      "</a>";
    $(this).html(link);
  });

  // Nav Hide/Show

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  $(".show-nav").bind("click", function(event) {
    event.preventDefault();
    var x = document.getElementById("mainNav");
    if (x.className === "main") {
      x.className += " responsive";
    } else {
      x.className = "main";
    }
  });
});
