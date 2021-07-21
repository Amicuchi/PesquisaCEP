function consultaCEP(){
    var cep = document.getElementById("cep").value;
    $.ajax({
        url: `http://viacep.com.br/ws/${cep}/json/`,
        type: "GET",
        success: function(response){
            $("#cepPesquisado").html(response.cep)
            $("#logradouro").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#complemento").html(response.complemento)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#ddd").html(response.ddd)
        }
    });
}
