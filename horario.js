// 
$(document).ready(function(){
	createTable();
    
    $(".horarios").click(function(){
        $("#myModal").modal();
    });
});

function createTable(){
	var conteudo = "<h1>Horários de atendimento</h1>"+
					"<table class='table table-hover'>"+
					   "<thead>"+
					   		"<tr>"+
						        "<th></th>"+
						        "<th>Segunda</th>"+
						        "<th>Terça</th>"+
						        "<th>Quarta</th>"+
						        "<th>Quinta</th>"+
						        "<th>Sexta</th>"+
						        "<th>Sábado</th>"+
					      	"</tr>"+
					    "</thead>"+
				    "<tbody >";

	for(var horas = 8; horas < 21; horas++){
		conteudo += "<tr>";
		conteudo += "<td>"+horas+"h00</td>"
		
		for(dias = 0; dias < 6; dias++){ 
			conteudo += "<td><a href='#' class='horarios'>disponível</a></td>";
		}
		
		"</tr>";

	}
	conteudo += "</tbody></table>";

	$("#tabelaHorario").html(conteudo);	
}
