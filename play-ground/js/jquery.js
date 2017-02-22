$(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);
    $("#target4").remove();
    $("#target2").appendTo("#right-well");
    $("#target5").clone().appendTo("#left-well");
    $("#target1").parent().css("background-color", "red");
    $("#right-well").children().css("color", "orange");
    $("#left-well").children().css("color", "green");
    $(".target:nth-child(2)").addClass("animated bounce");
    $(".target:even").addClass("animated shake");
});

// Panic Button

$("#panic").click(function() {
    $("#main-content").addClass("animated hinge");
});

// Panic has gone Button

$("#panic-has-gone").click(function() {
    $("#main-content").removeClass("animated hinge");
    $("#main-content").addClass("animated bounceInUp");
});