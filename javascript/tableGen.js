$(document).ready(function () {
  //console.log("Called 1");
  var di = 30;
  var inactive = true;
  var inr = 1;
  var days = [
    "Error",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var seas = [
    "Error",
    "Spring_1",
    "Summer_1",
    "Fall_1",
    "Winter_1",
    "Spring_2",
    "Summer_2",
    "Fall_2",
    "Winter_2"
  ]
  //console.log("Called 2");
  for(k = 1;k<=8;k++){
    $("body").append(
        '<div id="' + seas[k] +'" class="season"></div>'
    );
    $("#"+seas[k]).append('<h1 class="season_title">' + seas[k].slice(0,-2) + ', Year ' + seas[k].slice(-1) + '</h1>');
    $("#"+seas[k]).append(
        '<table id="month_calendar_inner" class="table table-bordered"></table>'
    );
    var completed = 0;
    for (i = 0; !completed; i++) {
        if (i === 0) {
            $("#"+seas[k]+' table').append('<tbody class="days_of_week"></tbody>');
            $("#"+seas[k]+" .days_of_week").append(
                '<tr id="days_of_week" class="active weekdays"></tr>'
            );
        } 
        else {
            $("#"+seas[k]+" .days_of_week").append('<tr class="the_days"></tr>');
        }

        for (j = 1; j <= 7; j++) {
            if (i === 0) {
                $("#"+seas[k]+" .weekdays").append(
                '<th class="day_of_week" scope="col">' + days[j] + "</th>"
                );
            } 
            else {
                if (inactive) {
                $("#"+seas[k]+" .the_days")
                    .last()
                    .append(
                        '<td class="day_cell out_of_range" >' +
                            '<div class = "date"> <span class="num">' +
                            di.toString() +
                            "</span></div>" +
                            "</td>"
                    );
                } 
                else {
                $(".the_days")
                    .last()
                    .append(
                    '<td id="' + di.toString() + '" class="day_cell in_range" >' +
                        '<div class = "date"> <span class="num">' +
                        di.toString() +
                        "</span></div>" +
                        "</td>"
                    );
                }
                di++;
                if (di > 30) {
                    di = 1;
                    inactive = !inactive;
                    if(i>1){
                        console.log(i);
                        completed = 1;
                    }
                }
            }
        }
    }
    if(di!=1){
        di-=7;
    }
    else{
        inactive = !inactive
    }
    if(di<=0){
        di+=30;
    }
  }
});
