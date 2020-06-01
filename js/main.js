$(function () {
  //   -----------scroll----------------
  $(document).scroll(function () {
    var $nav = $(".nav-menu");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
  $("#toggle").click(function () {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
  $("#resize ul li a").click(function () {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
  $(".close-btn").click(function () {
    $(this).toggleClass("on");
    $("#resize").toggleClass("active");
  });
  // slide slick
  $("#autoplay").slick({
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });
  $(".lazy").slick({
    dots: false,
    lazyLoad: "ondemand",
    slidesToShow: 5,
    slidesToScroll: 1,
  });
  $("#lightgallery").lightGallery();
  $(".detail_slide").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
  });
  $(".read-more").click(function () {
    $("#content-detail-amenities").addClass("active");
    $("html,body").addClass("noscroll");
    return false;
  });
  $("#back").click(function () {
    $("#content-detail-amenities").removeClass("active");
    $("html,body").removeClass("noscroll");
    return false;
  });
  // Len top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
    else $(".lentop").fadeOut();
  });
  $(".lentop").on("click", function () {
    $("HTML, BODY").animate({ scrollTop: 0 }, 1000);
  });
  $(".contactmenu").on("click", function () {
    var bottom = $(document).height() - $(window).height();
    $("HTML, BODY").animate({ scrollTop: bottom }, 1000);
  });

  // new datepickercustom
});
$(function () {
  const dateRangeDisabled = [
    {
      start: "23/05/2020",
      end: "29/05/2020",
    },
    {
      start: "01/06/2020",
      end: "05/06/2020",
    },
  ];
  // init daterangepicker
  const today = new Date();
  var picker = $("#daterangepicker1").daterangepicker({
    parentEl: "#daterangepicker1-container",
    autoApply: true,
    minDate: today,
    isInvalidDate: function (date) {
      for (let dateRange of dateRangeDisabled) {
        if (
          date.isSameOrAfter(moment(dateRange.start, "DD/MM/YYYY")) &&
          date.isSameOrBefore(moment(dateRange.end, "DD/MM/YYYY"))
        ) {
          return true;
        }
      }
      return false;
    },
  });
  // range update listener

  picker.on("apply.daterangepicker", function (ev, picker) {
    // $("#timeCheckIn").value(picker.startDate.format("DD-MM-YYYY")).val();
    // $("#timeCheckOut").value(picker.endDate.format("DD-MM-YYYY")).val();

    document.getElementById("timeCheckIn").value = picker.startDate.format(
      "DD/MM/YYYY"
    );
    document.getElementById("timeCheckOut").value = picker.endDate.format(
      "DD/MM/YYYY"
    );

    // picker.endDate.format("DD-MM-YYYY");
  });
  // prevent hide after range selection
  picker.data("daterangepicker").hide = function () {};
  // show picker on load
  picker.data("daterangepicker").show();
});
