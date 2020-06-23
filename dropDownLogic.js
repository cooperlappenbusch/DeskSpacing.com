$(function () {
    $("#dropdown a").click(function () {
        $("#AdvancedSearch .selection").text('Aspect Ratio: ' + $(this).text());
    });
});