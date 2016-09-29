JQuery Syntax

$(document).ready(function{
	// All JQuery code goes here
});

// Selectig from DOM (Selectors)

$("div") // Select all <div> tags

$("#myId") // Select the ID

$(".myClass") // select the class

// Calling actions with selected Objects

$("div").addClass("className");  // .addClass will add Classes to all <div> tags

$("#myId").css("atribute","value"); // .css will add css style to an elemente

Var myElement = $("#myElement").html(); // .html() Get the html contents of the first element in the set of matched elements

// Events handler

$("a").click(function() {
	// do something when a link tag <a> is clicked
})/

// Other events

.blur();
.focus();
.hover();
.keydown();
.load();
.reload();

// hidden, shown & toggling elements

$("#myElement").hide(function() {
	// do something once the element is hidden
});

$("#myElement").show(function() {
	// do something once the element is shown
});

$("#myElement").toggle(function() {
	// do something once element is shown/hidden
});

// Adding animations to elements values = (slow, 400, fast).

$("#myElement").slideDown("fast", function() {
	// do something when slide down is finished
});

$("#myElement").slideUp("slow", function() {
	// do something when slide up is finished
});

$("#myElement").slideToggle(1000, function() {
	// do something when slide up/down is finished
});