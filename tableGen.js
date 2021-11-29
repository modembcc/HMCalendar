$(document).ready(function(){
    console.log("Called 1");
    var di = 27;
    var inr = 1;
    var s = [
        "Error",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    $(".season").append('<table id="month_calendar_inner" class="table table-bordered"></table>');
    console.log("Called 2");
    for(i=0;i<=5;i++){
        if(!i){
            $(".table").append("<tbody class=\"days_of_week\"></tbody>");
            $(".days_of_week").append("<tr id=\"days_of_week\" class=\"active weekdays\">");
        }
        else{
            $(".days_of_week").append("<tr class=\"the_days\">");
        }
        for(j=1;j<=7;j++){
            if(!i){
                $(".weekdays").append("<th class=\"day_of_week\" scope=\"col\">"+s[j]+"</th>");
            }
            else{
                
            }
        }
        $(".table").append("</tr>");
        if(!i){
            $(".table").append("<tbody>");
        }
    }
    $(".season").append("</table>");
});