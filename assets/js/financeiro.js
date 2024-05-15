// Script simples pra pesquisa dos blocos
$('#search_agendamento').on('input', function() {
    var filtro = $(this).val().toUpperCase();
    var algumResultadoEncontrado = false; 

    $('.option_bloco').each(function() {
        var atributoSearch = $(this).parent().attr('search');
        
        if (atributoSearch && atributoSearch.toUpperCase().indexOf(filtro) > -1) {
            $(this).show();
            algumResultadoEncontrado = true; 
        } else {
            $(this).hide();
        }
    });

    if (algumResultadoEncontrado) {
        $('#nothing_here').hide();
        $('.nth_here').hide();
    } else {
        $('#nothing_here').show();
        $('.nth_here').show();
    }
});

// Modal PIX
$("#pagamento-pix").click(function() {
    $("#pix").css("display", "block");
});

$(".close-pix").click(function() {
    $("#pix").css("display", "none");
});

$(".close_modal--data").click(function() {
    $("#pix").css("display", "none");
});

$(window).click(function(event) {
    if (event.target == $("#pix")[0]) {
    $("#pix").css("display", "none");
    }
});

// Modal Boleto
$("#pagamento-boleto").click(function() {
    $("#boleto").css("display", "block");
});

$(".close-boleto").click(function() {
    $("#boleto").css("display", "none");
});

$(".close_modal--data").click(function() {
    $("#boleto").css("display", "none");
});

$(window).click(function(event) {
    if (event.target == $("#boleto")[0]) {
    $("#boleto").css("display", "none");
    }
});

// Copia o atrubuto do botão copia e cola
$(document).ready(function() {
    $(".confirm-pix").click(function() {
        var code = $(this).attr("code");

        var tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(code).select();
        document.execCommand("copy");
        tempInput.remove();

        var tooltip = $("#tooltip");
        tooltip.addClass("show");

        setTimeout(function() {
        tooltip.removeClass("show");
        }, 2000);
    });

    $(".confirm-boleto").click(function() {
        var code_boleto = $(this).attr("code");

        var tempInput_boleto = $("<input>");
        $("body").append(tempInput_boleto);
        tempInput_boleto.val(code_boleto).select();
        document.execCommand("copy");
        tempInput_boleto.remove();

        var tooltip_boleto = $("#tooltip_boleto");
        tooltip_boleto.addClass("show");

        setTimeout(function() {
        tooltip_boleto.removeClass("show");
        }, 2000);
    });
});