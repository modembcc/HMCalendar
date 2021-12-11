$(document).ready(function () {
  var text = "";
  var chara = [
    "Error",
    "Lyla",
    "Gina",
    "Katie",
    "Gwen",
    "Dia",
    "Goddess",
    "Woody",
    "Aurelia",
    "Joe",
    "Chester",
    "Bob",
    "Tim",
    "Rudolph",
    "Louis",
    "Ronald",
  ];
  $("#showEvents").submit(function (e) {
    e.preventDefault();
  });
  //getTheEvent("Gina");
  for (var i = 1; i <= 15; i++) {
    getTheEvent(chara[i]);
  }
  //console.log("Works");
  //updateEvents();
});

function getTheEvent(fn) {
  var seas = [
    "Error",
    "Spring_1",
    "Summer_1",
    "Fall_1",
    "Winter_1",
    "Spring_2",
    "Summer_2",
    "Fall_2",
    "Winter_2",
  ];
  $.getJSON("events/" + fn + ".json", function (data) {
    var len = data.events.length;
    for (var i = 0; i < len; i++) {
      /*console.log(data.events[i]["Month"]); 
      console.log(data.events[i]["Start Date"]);
      console.log("------------");*/
      var month = data.events[i]["Month"];
      var Sdate = data.events[i]["Start Date"];
      var name = data.events[i]["Event"];
      var place = data.events[i]["Place"];
      var req = data.events[i]["Req"];
      var en = (i + 1).toString();
      $("#" + seas[month] + " #" + Sdate).append(
        '<div class="event tips event' +
          fn +
          " " +
          fn +
          en +
          '" data-toggle="popover"></div>'
      );
      $("#" + seas[month] + " #" + Sdate + " ." + fn + en).append(
        '<div class="qtip hidden"></div>'
      );
      $("#" + seas[month] + " #" + Sdate + " ." + fn + en + " .qtip").append(
        '<div class="title"></div>'
      );
      $("#" + seas[month] + " #" + Sdate + " ." + fn + en + " .title").append(
        `<h5 class="card bg-info text-dark py-1">` +
          fn +
          " " +
          (i + 1).toString() +
          "</h5>"
      );
      $("#" + seas[month] + " #" + Sdate + " ." + fn + en + " .title").append(
        `<p class="text-dark">🛖 : ` + place + "</p>"
      );
      $("#" + seas[month] + " #" + Sdate + " ." + fn + en + " .title").append(
        `<p class="text-dark">🛠️ : ` + req + "</p>"
      );
    }
    $(".event").hide();
  }).fail(function () {
    console.log("An error has occurred.");
  });
}

function updateEvents() {
  var chara = [
    "Error",
    "Lyla",
    "Gina",
    "Katie",
    "Gwen",
    "Dia",
    "Goddess",
    "Woody",
    "Aurelia",
    "Joe",
    "Chester",
    "Bob",
    "Tim",
    "Rudolph",
    "Louis",
    "Ronald",
  ];
  //var checkedValue = $('#showLyla:checked').val();
  for (var i = 1; i <= 15; i++) {
    var checkedValue = $("#show" + chara[i] + ":checked").val();
    if (checkedValue) {
      //console.log('Show '+chara[i]);
      $(".event" + chara[i]).show();
    } else {
      $(".event" + chara[i]).hide();
    }
  }
}
