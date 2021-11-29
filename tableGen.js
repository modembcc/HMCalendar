$(document).ready(function () {
  console.log("Called 1");
  var di = 27;
  var inactive = true;
  var inr = 1;
  var s = [
    "Error",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  $(".season").append(
    '<table id="month_calendar_inner" class="table table-bordered"></table>'
  );

  console.log("Called 2");
  for (i = 0; i <= 5; i++) {
    if (i === 0) {
      $(".table").append('<tbody class="days_of_week"></tbody>');
      $(".days_of_week").append(
        '<tr id="days_of_week" class="active weekdays"></tr>'
      );
    } else {
      $(".days_of_week").append('<tr class="the_days"></tr>');
    }

    for (j = 1; j <= 7; j++) {
      if (i === 0) {
        $(".weekdays").append(
          '<th class="day_of_week" scope="col">' + s[j] + "</th>"
        );
      } else {
        if (di > 31) {
          di = 1;
          inactive = false;
        }
        if (inactive) {
          $(".the_days")
            .last()
            .append(
              '<td class="day_cell out_of_range" >' +
                '<div class = "date"> <span class="num">' +
                di.toString() +
                "</span></div>" +
                "</td>"
            );
        } else {
          $(".the_days")
            .last()
            .append(
              '<td class="day_cell in_range" >' +
                '<div class = "date"> <span class="num">' +
                di.toString() +
                "</span></div>" +
                "</td>"
            );
        }

        di++;
      }
    }
  }
});
