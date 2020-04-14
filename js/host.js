$(function () {
  $(".new_room").click(function () {
    $(".new-dialog-wrapper").addClass("active");
    return false;
  });
  $(".wrapper_header_btn_back").click(function () {
    $(".new-dialog-wrapper").removeClass("active");
    return false;
  });
  $("#sua").click(function () {
    $(".edit_promotion").addClass("live");
    return false;
  });
  $(".wrapper_header_btn_back").click(function () {
    $(".edit_promotion").removeClass("live");
    return false;
  });
});
$(function () {
  $(".menu-user").click(function () {
    $(".user").addClass("open");
    return false;
  });
});
