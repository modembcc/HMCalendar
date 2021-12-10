$(document).ready(function () {
  var text = "";
  var chara = [
    "Error",
    "Lyla",
    "Gina",
    "Katie",
    "Gwen",
    "Dia",
    "Goddess"
  ];
  $("#showEvents").submit(function(e) {
    e.preventDefault();
  });
  getTheEvent("Lyla");
});

function getTheEvent(fn){
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
  ];
  $.getJSON('events/'+fn+'.json', function(data){
    var len = data.events.length;
    for(var i=0;i<len;i++){
      /*console.log(data.events[i]["Month"]); 
      console.log(data.events[i]["Start Date"]);
      console.log("------------");*/
      var month = data.events[i]["Month"];
      var Sdate = data.events[i]["Start Date"];
      var name = data.events[i]["Event"];
      var place = data.events[i]["Place"];
      var req = data.events[i]["Req"];
      $("#"+seas[month]+' #'+Sdate).append('<div class="event tips event'+fn+'" data-toggle="popover"></div>');
      $("#"+seas[month]+' #'+Sdate+' .event').append('<div class="qtip hidden"></div>');
      $("#"+seas[month]+' #'+Sdate+' .qtip').append('<div class="title"></div>');
      $("#"+seas[month]+' #'+Sdate+' .title').append(fn+' '+(i+1).toString()+'<br>');
      $("#"+seas[month]+' #'+Sdate+' .title').append(place+'<br>');
      $("#"+seas[month]+' #'+Sdate+' .title').append(req);
    }
  }).fail(function(){
    console.log("An error has occurred.");
  });
}

function updateEvents(){
  var chara = [
    "Error",
    "Lyla",
    "Gina",
    "Katie",
    "Gwen",
    "Dia",
    "Goddess"
  ];
  //var checkedValue = $('#showLyla:checked').val();
  for(var i=1;i<7;i++){
    var checkedValue = $('#show'+chara[i]+':checked').val();
    if(checkedValue){
      //console.log('Show '+chara[i]);
      $(".event"+chara[i]).show();
    }
    else{
      $(".event"+chara[i]).hide();
    }
  }
}