$(document).ready(function () {
  const seas = [
    { id: "Error" },
    { id: "Spring_1", title: "Spring, Year 1" },
    { id: "Summer_1", title: "Summer, Year 1" },
    { id: "Fall_1", title: "Fall, Year 1" },
    { id: "Winter_1", title: "Winter, Year 1" },
    { id: "Spring_2", title: "Spring, Year 2" },
    { id: "Summer_2", title: "Summer, Year 2" },
    { id: "Fall_2", title: "Fall, Year 2" },
    { id: "Winter_2", title: "Winter, Year 2" },
  ];
  for (let j = 1; j <= 8; j++) {
    if (j == 1) $("#" + seas[j].id).show();
    else $("#" + seas[j].id).hide();
  }
  for (let i = 1; i <= 8; i++) {
    $("#season_dropdown").append(
      `<li id="option-${seas[i].id}" style="cursor:pointer;"><a class="dropdown-item">${seas[i].title}</a></li>`
    );
    $(`#option-${seas[i].id}`).click(() => {
      for (let j = 1; j <= 8; j++) {
        if (j == i) $("#" + seas[j].id).show();
        else $("#" + seas[j].id).hide();
      }
    });
  }
  /*updateEvents();
    console.log("Did this");*/
});
