 $(document).ready(function(){
    $('.input_area').click(function(){
        $(this).css('border-bottom', '4px solid var(--green-color)');
    });
});

    // COMPORTAMENTO CSS DOS INPUTS
$(document).click(function(event) { 
    if(!$(event.target).closest('.input_area').length) {
        $('.input_area').css('border-bottom', '2px solid var(--green-color)');
    }    
    
    $('#cpf').mask('000.000.000-00', {reverse: true});

    const $input_cNumber = $("#contract_number");
    const $input_cpf = $("#cpf");
    const $placeholder_cNumber = $(".place_contract");
    const $placeholder_cpf = $(".place_cpf");

    $input_cNumber.on("focus", function() {
        $placeholder_cNumber.css({
            top: "6px",
            fontSize: "8px"
        });
    });

    $input_cNumber.on("blur", function() {
        if ($(this).val() === "") {
            $placeholder_cNumber.css({
                top: "16px",
                fontSize: "11px"
            });
        }
    });

    $input_cNumber.on("input", function() {
        if ($(this).val() !== "") {
            $placeholder_cNumber.css({
                top: "6px",
                fontSize: "8px"
            });
        }
    });

    $input_cpf.on("focus", function() {
        $placeholder_cpf.css({
            top: "6px",
            fontSize: "8px"
        });
    });

    $input_cpf.on("blur", function() {
        if ($(this).val() === "") {
            $placeholder_cpf.css({
                top: "16px",
                fontSize: "11px"
            });
        }
    });

    $input_cpf.on("input", function() {
        if ($(this).val() !== "") {
            $placeholder_cpf.css({
                top: "6px",
                fontSize: "8px"
            });
        }
    });

});

// CONTADOR DE CARACTERIES 

$('#cpf').on('input', function() {
    var maxLength = 14;
    var currentLength = $(this).val().length;
    $('.count_char').text(currentLength + '/' + maxLength);
});