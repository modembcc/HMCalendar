$(document).ready(function () {
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
    var cur = 1;
    for(var i=1;i<=8;i++){
        $("#"+seas[i]).hide();
    }
    //console.log(cur);
    $("#"+seas[cur]).show();
    $("#season").change(function(event) {
        $("#season option:selected").each(function () {
            var tmp = $(this).val();
            $("#"+seas[cur]).hide();
            $("#"+seas[tmp]).show();
            cur = tmp;
        });
    });
});