$(document).ready(function() {
 smallResize();
  $(window).on("resize", smallResize);

  function smallResize() {
    if ($(this).width() <= 576) {
      $("#title-section .btn-group").addClass("btn-group-vertical");
      $("#title-section .btn-group").removeClass("btn-group");
    } else {
      $("#title-section .btn-group-vertical").addClass("btn-group");
      $("#title-section .btn-group-vertical").removeClass("btn-group-vertical");
    }
  }
});