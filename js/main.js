/*aquí va tu código*/
// funcion que guarda los nombres y comentarios
const app  = {
    item :  {
        name: undefined,
        comment: undefined,
    },

	init : function () {
        app.item.name =  $('#name');
        app.item.coment = $('#coment');
        app.setup ();
        app.recargar();
    },

    setup: function () {
        $('#addBTN').click (app.addComment) ;
        $('#clearBTN').click (app.clearComments) ;
    },

    addComment: function () {
    	localStorage.setItem(app.item.name.val(),app.item.coment.val());
    	$('#name').val("");
    	$('#coment').val("");
		app.recargar();    	
    },

    recargar : function(){
    	$('#ale').empty();
    	for ( let coment in localStorage) {
    	let comentarios = localStorage[coment];
    	$('#ale').append(`<div><h4>${coment}</h4><p>${comentarios}</p></div>`);
		}
    },

    clearComments: function(){
    	$('#ale').empty();
    	localStorage.clear();
    	}
	}
	$(document).ready(app.init);

// function guardar(){
// 	//valoracion de los imput
// 	// localStorage.setItem($())
// 	var nombre = document.getElementById('clave').value;
// 	var comentario =document.getElementById('valor').value;
// 	localStorage.setItem(nombre,comentario);

// 	var comentarioG = document.getElementById('textSave');
// 	for (var i = 0; i < localStorage.length; i++) {

// 		var name = localStorage.key(i);
// 		var clave = localStorage.getItem(name);

// 		var div = document.createElement('div');
// 		div.setAttribute("id", "content");

// 		var h4 = document.createElement('h4');
// 		var nombre = document.createTextNode(name);
		

// 		var p = document.createElement('p');
// 		var comentarios = document.createTextNode(clave);

// 		h4.appendChild(nombre);
// 		p.appendChild(comentarios);
// 		div.appendChild(h4);
// 		div.appendChild(p);

// 		comentarioG.appendChild(div);		
// 	}
// 		document.getElementById('clave').value = "";
// 		document.getElementById('valor').value="";
// }

// function  que elimina los nombres y comentarios que estan guardados
// function limpiar(){
// 	localStorage.clear();
// 	var divCont = document.getElementById('content');
// 	divCont.parentNode.removeChild(divCont);
// }

// guarda la funcion cada vez que se ingresa valores
// $(document).ready(function(){
// 	guardar();
// })


