$(document).ready(function() {
    $(".menu-btn").click(function() {
        $("#sidebar").toggleClass("active");
    });

    $(".close-btn").click(function() {
        $("#sidebar").removeClass("active");
    });

    $(document).on("click", function(e) {
        if (!$(e.target).closest("#sidebar, .menu-btn").length) {
            $("#sidebar").removeClass("active");
        }
    });
});