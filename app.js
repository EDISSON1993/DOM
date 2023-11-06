
/*Declaración de variables*/
const form = document.getElementById('agregarForm');
const tareasLista = document.getElementById('tareasLista');
const listafunc = document.querySelector("ul");
const eliminarCompletadasl = document.getElementById('eliminarCompletadas');

/*Función para agregar datos*/
form.addEventListener('submit', function (event){

    event.preventDefault();
    
    /*Declaración de variables para traer el id tarea y mostrarlo en la pantalla*/
    const nuevaTarea = document.getElementById('tarea').value;

    const nuevaTareaLi = document.createElement('li');
   
    nuevaTareaLi.innerText= nuevaTarea;

    nuevaTareaLi.addEventListener('click', function(){

        
        nuevaTareaLi.classList.toggle('completada');


    })

    tareasLista.appendChild(nuevaTareaLi);

    document.getElementById('tarea').value = ' ';

    
    /*Función para eliminar las tareas que estaban agregadas */
    eliminarCompletadasl.addEventListener('click', function(){

        const list = document.getElementById('tareasLista');

        const item = listafunc.lastElementChild;

        list.removeChild(item);

       
        document.getElementById('saludo').innerText='Gracias por eliminar todos los elementos de la lista';    

    });

    document.getElementById('saludo').innerText='';

})



