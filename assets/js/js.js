

var tareas = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }];

for (var i = 0; i < 10; i++) {
document.write('<ul> <li> ' + tareas[i].title + '</li></ul>');
};
  

  function obtenerDatos(){
	var input = document.getElementById("introtarea");

	var continput = document.getElementsByClassName("list");

	continput[0].innerHTML +="<li>" + input.value +"<li>"+ "<br>";

	input.value = "";
}





/*var tareass = [];
var records = document.getElementById('records');

// Constructor para generar un nuevo producto
function Producto(nuevatarea) {
  this.nuevatarea = nuevatarea.toLowerCase();
  this.producttID = (productos.length + 1);
 
};

function mergeHTML (){
  var html = '';
  for (var i=0; i<tareass.length; i++){
    html += tareass[i].toHTML();
  }
  return html;
};

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}

// Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
var addTarea = document.getElementById('getfuncion');
addTarea.onclick = function() {
  var product  = new Producto (nuevatarea);
  productos.push(product);
  printHTML(product.toHTML());
};*/


