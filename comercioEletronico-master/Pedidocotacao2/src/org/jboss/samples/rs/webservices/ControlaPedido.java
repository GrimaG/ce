package org.jboss.samples.rs.webservices;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Scanner;

public class ControlaPedido {

	public static void salvar(Pedido pedido){
		try(BufferedWriter out = new BufferedWriter(new FileWriter("pedidos.txt", true))) {
			out.write(pedido.getNroPedido()+", "+pedido.getCliente()+"\n");
			ArrayList itens = pedido.getItens();
			for(int i = 0 ; i < itens.size() ; i++){
				Item item = (Item)itens.get(i);
				out.write(item.getCodigo()+", "+item.getDescricao()+", "+item.getMarca()+", "+item.getQtd()+"\n");
			}
			out.write("@\n");
			
		} catch (Exception e) {
			System.out.println("Erro de IO!\n " + e.getMessage());
		}
	}
	public void deleteAll(){
		try {
			 File f = new File("pedidos.txt");
	         
	         // tries to delete a non-existing file
	         boolean bool = f.delete();
	         
	         // prints
	         System.out.println("File deleted: "+bool);
		} catch (Exception x) {
		    System.err.format("No such" + " file or directory%n");
		}
	}
	public ArrayList<Pedido> carregarPedidos(){
		ArrayList<Pedido> pedidos = new ArrayList<>();
		try(Scanner scanner = new Scanner(new FileReader("pedidos.txt")).useDelimiter("\n")){
			Pedido pedido = null;
			while(scanner.hasNext()){
				String pals[];
				String linha = scanner.nextLine();
				System.out.println(linha);
				pals = linha.split(",");
				if(pals.length != 1){
					if(pals.length == 2){
						pedido = new Pedido(pals[0], pals[1]);
						pedidos.add(pedido);
					}
					else if(pals.length == 4){
						Item item = new Item(pals[0], pals[1], pals[2], Integer.parseInt(pals[3].trim()));
						pedido.inseriItem(item);
					}else{
						System.out.println("Arquivo inválido");
					}
				}
			}
			return pedidos;
		}catch(FileNotFoundException e){
			System.out.println("Erro ao abrir o arquivo " + e.getMessage());
		}
		
		return pedidos;
	}
	public ArrayList<Pedido> carregarPedidos(String path){
		ArrayList<Pedido> pedidos = new ArrayList<>();
		try(Scanner scanner = new Scanner(new FileReader(path)).useDelimiter("\n")){
			Pedido pedido = null;
			while(scanner.hasNext()){
				String pals[];
				String linha = scanner.nextLine();
				System.out.println(linha);
				pals = linha.split(",");
				if(pals.length != 1){
					if(pals.length == 2){
						pedido = new Pedido(pals[0], pals[1]);
						pedidos.add(pedido);
					}
					else if(pals.length == 4){
						Item item = new Item(pals[0], pals[1], pals[2], Integer.parseInt(pals[3].trim()));
						pedido.inseriItem(item);
					}else{
						System.out.println("Arquivo inválido");
					}
				}
			}
			return pedidos;
		}catch(FileNotFoundException e){
			System.out.println("Erro ao abrir o arquivo " + e.getMessage());
		}
		
		return pedidos;
	}
}
