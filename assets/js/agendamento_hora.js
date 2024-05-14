$(document).ready(function() {
    $("#choice_time").click(function() {
        $("#modal").css("display", "block");
    });

    $(".close").click(function() {
        $("#modal").css("display", "none");
    });

    $(".confirm_time").click(function() {
        $("#modal").css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target == $("#modal")[0]) {
        $("#modal").css("display", "none");
        }
    });

    // modal de data de agendamento

    $("#choice_data").click(function() {
        $("#modal_data").css("display", "block");
    });

    $(".close").click(function() {
        $("#modal_data").css("display", "none");
    });

    $(".close_modal--data").click(function() {
        $("#modal_data").css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target == $("#modal_data")[0]) {
        $("#modal_data").css("display", "none");
        }
    });

    // COMPORTAMENTO DO AGENDAMENTO DO HORÁRIO
    $("#choice_time").click(function() {
        $("#modal").css("display", "block");
    });

    $(".modal_options--time button").click(function() {
        var selectedTime = $(this).text();
        $("#clock_scheduling").text(selectedTime);
    });

    $(".close").click(function() {
        $("#modal").css("display", "none");
    });

    $(window).click(function(event) {
        if (event.target == $("#modal")[0]) {
        $("#modal").css("display", "none");
        }
    });

    // COMPORTAMENTO DO AGENDAMENTO DE DATA
    $(".option_bloco").click(function() {
        var selectedDate = $(this).data("agendada");
        $("#data_marcada").text(selectedDate);
    });
    
});