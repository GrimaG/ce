package org.jboss.samples.rs.webservices;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.POST;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;

import com.google.gson.Gson;

@Path("/pedidos")
public class SistemaCotacao {

	@GET()
	@Produces("text/plain")
	public String sayHello() {
		ControlaPedido controle = new ControlaPedido();
		ArrayList<Pedido> pedidos = controle.carregarPedidos();
		Gson gson = new Gson();
		String retorno = gson.toJson(pedidos);
	    return retorno;
	}
	
	@POST
	@Consumes("text/plain")
	public void save(String message) {
		System.out.println("hello moto ------- ");
		ControlaPedido controle = new ControlaPedido();
		Gson gson = new Gson();
		Pedido retorno = gson.fromJson(message, Pedido.class);
		controle.salvar(retorno);
	}
	@DELETE
	@Path("/deleteAll")
	public void deleteById(){
		ControlaPedido controle = new ControlaPedido();
		controle.deleteAll();
	}
}
