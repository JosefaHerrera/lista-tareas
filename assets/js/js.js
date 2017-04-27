var tareasJ= [
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

 var tareasjs = tareasJ.forEach(function(valorActual){
    document.write("<ul> <li> " +valorActual.title+"</li></ul>")});

 //ahora debes hacer como se llama una funcion ??? insertarJS(); ??
function User(userId,id,title,completed){
	this.userId = userId;
	this.id = id;
	this.title = title;
	this.completed = completed;
};

function insertarJS(introtarea){//el parametro de esto es el title, lo que ingresa el usuario, lo demas lo asignas tú dos lineas más abajo
	var largo = tareasJ.length - 1; //sacando la ultima posicion que es donde insertaremos
	var variable = User("id","User",introtarea,true); //vamos a crear una variable con el constructor user, pasale los parametros
	tareasJ[largo] = TareaJ.push(variable)
};


var arr = [];
var records = document.getElementById('records');


// Constructor para generar una nueva tarea
function Tareas(tarea) {
  this.tarea = tarea;
  this.tareaID = (arr.length+ 1);
};

// Cuando hacen click en el boton Add, crea una nueva tarea y la añade al array de arr
var addtarea = document.getElementById("getfuncion");
addtarea.onclick = function() {
	var tarea = document.getElementById("introtarea").value; //input
  var nuevatarea  = new Tareas(tarea);
  arr.push(nuevatarea);
  printHTML(nuevatarea.toHTML());
};

Tareas.prototype.toHTML = function contador() {
var nuevat = document.getElementById("nombrecito");
nuevat.innerHTML += "<ul> <li> " + this.tarea;
};

function printHTML (html){
  records.innerHTML = '';
  };



