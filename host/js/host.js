$(function() {
  $(".new_room").click(function() {
    $(".new-dialog-wrapper").addClass("active");
    return false;
  });
  $(".wrapper_header_btn_back").click(function() {
    $(".new-dialog-wrapper").removeClass("active");
    return false;
  });
});
$(function() {
  $(".menu-user").click(function() {
    $(".user").addClass("open");
    return false;
  });
});
