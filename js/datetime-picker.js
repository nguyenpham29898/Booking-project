$(function () {
  // <!-- datetime-picker -->
  ("use strict");
  var nowTemp = new Date();
  var now = new Date(
    nowTemp.getFullYear(),
    nowTemp.getMonth(),
    nowTemp.getDate(),
    0,
    0,
    0,
    0
  );

  var checkin = $("#timeCheckIn")
    .datepicker({
      onRender: function (date) {
        return date.valueOf() < now.valueOf() ? "disabled" : "";
      },
    })
    .on("changeDate", function (ev) {
      if (ev.date.valueOf() > checkout.date.valueOf()) {
        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout.setValue(newDate);
      }
      checkin.hide();
      $("#timeCheckOut")[0].focus();
    })
    .data("datepicker");
  var checkout = $("#timeCheckOut")
    .datepicker({
      onRender: function (date) {
        return date.valueOf() <= checkin.date.valueOf() ? "disabled" : "";
      },
    })
    .on("changeDate", function (ev) {
      checkout.hide();
    })
    .data("datepicker");
  //new option

  var checkin2 = $("#timeCheckIn2")
    .datepicker({
      onRender: function (date) {
        return date.valueOf() < now.valueOf() ? "disabled" : "";
      },
    })
    .on("changeDate", function (ev) {
      if (ev.date.valueOf() > checkout2.date.valueOf()) {
        var newDate = new Date(ev.date);
        newDate.setDate(newDate.getDate() + 1);
        checkout2.setValue(newDate);
      }
      checkin2.hide();
      $("#timeCheckOut2")[0].focus();
    })
    .data("datepicker");
  var checkout2 = $("#timeCheckOut")
    .datepicker({
      onRender: function (date) {
        return date.valueOf() <= checkin2.date.valueOf() ? "disabled" : "";
      },
    })
    .on("changeDate", function (ev) {
      checkout2.hide();
    })
    .data("datepicker");
});
