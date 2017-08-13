$(document).ready(function () {
  $("section:first").fadeIn("fast").animate({top: "0px"}, 200);
  // map each section to a nav item
  $("section").each(function(index) {
    $("#menu li a").eq(index).attr("data-section", index);
  });

  $("#menu li a").on("click", function() {
      var index = $(this).attr("data-section");
      var selected = $("section").eq(index);

      // reset position
      $("section").fadeOut("fast").css("top","400px");

      // animate
      selected.fadeIn("fast").animate({top: "0px"}, 200);

      $(".active").removeClass("active");
      $(this).addClass("active");
  });
});
