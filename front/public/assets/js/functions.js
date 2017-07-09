var itensList = [];
function insertValueTable() {
    var desc = document.getElementById("desc").value;
    var valor_unit = document.getElementById("valor_unit").value;
    var quantidade = document.getElementById("qtd").value;
    if (!( desc == "" || valor_unit == "" || quantidade == "")) {


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
		var total_item = quantidade*valor_unit;

		document.getElementById("valor").value = sumTotal+total_item;
        cell1.innerHTML = desc;
		cell2.innerHTML = quantidade;
        cell3.innerHTML = valor_unit;
		cell4.innerHTML = total_item;
        var item = {
            Quantidade: quantidade,
            ValorT: total_item,
            ValorU: valor_unit,
            item: desc
        };
        itensList.push(item);
    }else{
        window.alert("Todos os campos devem ser preenchidos.")
    }
}

function send(){
     var valor = document.getElementById("valor").value;
    var client = document.getElementById("cliente").value;
	var date = document.getElementById("date").value;
    var Pedido = {
        valorT: valor,
        cliente: client,
		data: date,
        listaItem : itensList
    }
    var send_object = JSON.stringify(Pedido);
    var selected_radio = document.querySelector('input[name="server"]:checked').value;
    var link;
    if(selected_radio=="myserver"){
        link = "https://serene-wave-75438.herokuapp.com/pedidos";
    }else{
        link = "https://pedidos-webapi.herokuapp.com/pedidos/adiciona";
    }

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", link, true);
	xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhttp.send(send_object);
     window.alert("Ein viado com sucesso!");
}
