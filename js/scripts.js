var average = function(weather, scenery, activities) {
  return (weather + scenery + activities) / 3;
};
var locale;

var questionare = function(average) {
  if (average <=1.75) {
    locale = "Camp Arifjan, Kuwait";
    $("#kuwait-img").show();
  } else if ((average > 1.75) && (average <= 2.25)) {
    locale = "Baghdad, Iraq";
    $("#baghdad-img").show();
  } else if ((average > 2.25) && (average <= 3.25)) {
    locale = "Erbil, Iraq";
    $("#erbil-img").show();
  } else {
    locale = "Bagram Airfield, Afganistan";
    $("#afganistan-img").show();
  }
};



$(document).ready(function() {
  $("form#questionare").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    var home = $("input#home").val();
    var age = parseInt($("input#age").val());
    var weather = parseInt($("input:radio[name=weather]:checked").val());
    var scenery = parseInt($("input:radio[name=scenery]:checked").val());
    var activities = parseInt($("input:radio[name=activities]:checked").val());
    var userAverage = average(weather, scenery, activities);
    questionare(userAverage);

    $("#locationResult").show();
    $(".name").text(name);
    $(".location").text(locale);
    $(".home").text(home);
  });
});
