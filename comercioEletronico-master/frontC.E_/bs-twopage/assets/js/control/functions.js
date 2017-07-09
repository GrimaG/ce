var itensList = [];
function insertValueTable() {
    var desc = document.getElementById("desc").value;
    var valor_unit = document.getElementById("valor_unit").value;
    var cod = document.getElementById("qtd").value;
    if (!(desc == "" || valor_unit == "" || cod == "")) {


        document.getElementById("desc").value = "";
        document.getElementById("valor_unit").value = "";
        document.getElementById("qtd").value = "";
        var sumTotal = document.getElementById("valor").value;

        var table = document.getElementById("tabela");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var total_item = cod * valor_unit;

        document.getElementById("valor").value = sumTotal + total_item;
        cell1.innerHTML = desc;
        cell2.innerHTML = cod;
        cell3.innerHTML = valor_unit;
        cell4.innerHTML = total_item;
        var item = {
            codProduto: cod,
            descricao: desc,
            nomeCurto: nome,
            valorUnidade: valor_unit,
            qtdUnidade: total_item

        };
        itensList.push(item);
    } else {
        window.alert("Todos os campos devem ser preenchidos.")
    }
}
//new
function inserItemCotacao() {
    var cdproduto = document.getElementById("cdproduto").value;
    var desc = document.getElementById("desc").value;
    var nCurto = document.getElementById("nCurto").value;
    var qUnit = document.getElementById("qUnit").value;
    var qEstoque = document.getElementById("qEstoque").value;
    if (!(cdproduto == "" || desc == "" || nCurto == "" || qUnit == "" || qEstoque == "")) {

        document.getElementById("cdproduto").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("nCurto").value = "";
        document.getElementById("qUnit").value = "";
        document.getElementById("qEstoque").value = "";

        var table = document.getElementById("tabela");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = cdproduto;
        cell2.innerHTML = desc;
        cell3.innerHTML = nCurto;
        cell4.innerHTML = qUnit;
        cell5.innerHTML = qEstoque;
        var item = {
            codigo: cdproduto,
            descricao: desc,
            nome: nCurto,
            qtdunt: qUnit,
            qtdund: qEstoque

        };
        itensList.push(item);
    } else {
        window.alert("Todos os campos devem ser preenchidos.")
    }
}

function enviarCotacao() {
    var client = document.getElementById("cliente").value;
    var date = document.getElementById("date").value;
    var Pedido = {
        cliente: client,
        data: date,
        itensDoPedido: itensList
    }
    var send_object = JSON.stringify(Pedido);
    var link = "";
    genericSend(link, "POST", send_object);

}

function genericSend(link, type, objectJson) {
    var xhttp = new XMLHttpRequest();
    xhttp.open(type, link, true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhttp.send(objectJson);
    window.alert("Einviado com sucesso!")
}

//end new 


function send() {
    var client = document.getElementById("nroPedido").value;
    var date = document.getElementById("date").value;
    var Pedido = {
        nroPedidoCliente: client,
        data: date,
        itens: itensList
    }
    var send_object = JSON.stringify(Pedido);
    var selected_radio = document.querySelector('input[name="server"]:checked').value;
    var link;
    if (selected_radio == "myserver") {
        link = "https://serene-wave-75438.herokuapp.com/pedidos";
    } else {
        link = "";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", link, true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhttp.send(send_object);
    window.alert("Einviado com sucesso!")
}


// estoque fornecedor

function storageOnLoad() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var jsonResponse = JSON.parse(xhr.responseText);
            for (var i = 0; i < responseText.d.length; i++) {
                var table = document.getElementById("tabela1");
                var row = table.insertRow(-1);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);

                cell1.innerHTML = responseText.d[i].codigo;
                cell2.innerHTML = responseText.d[i].descricao;
                cell3.innerHTML = responseText.d[i].nome;
                cell4.innerHTML = responseText.d[i].qtdunt;
                cell5.innerHTML = responseText.d[i].qtdund;
            }
        }
    }
    xhr.open('GET', 'http://example.com', true);
    xhr.send(null);
}

function saveOnStorage() {
    var storage = {
        itens: itensList
    }
    var send_object = JSON.stringify(storage);  
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", link, true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhttp.send(send_object);
    window.alert("Einviado com sucesso!")
}