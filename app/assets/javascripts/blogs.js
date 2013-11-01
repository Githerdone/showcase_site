// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


var toggleHandler = function(toggle) {
    var toggle = toggle;
    var radio = $(toggle).find("input");

    var checkToggleState = function() {
        if (radio.eq(0).is(":checked")) {
            $(toggle).removeClass("toggle-off");
        } else {
            $(toggle).addClass("toggle-off");
        }
    };

    checkToggleState();

    radio.eq(0).click(function() {
        $(toggle).toggleClass("toggle-off");
    });

    radio.eq(1).click(function() {
        $(toggle).toggleClass("toggle-off");
    });
};

$(document).ready(function() {
    $(".toggle").each(function(index, toggle) {
        toggleHandler(toggle);
    });
});