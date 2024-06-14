fetch =('menu.json')
//que hace ? esta linea inicia la carga del archivo menu.json fetch es una funcion de javascript que facilita la realizacion de solucitudes de red como tener de datos de un archivoo un endpoint de API
//Como funciona ? fetch devuelve una promesa que, cuando se resuelve, tendra acceso ala respuesta de datos en formato JSON , si un objeto de respuesta que inclute varios detalles sobre la respuesta misma
.then (response => response.json ())
//Que hace? esta linea toma el objeto de respuesta obteniendo el fetch y utiliza el motodo .json() para convertir el cuerpo de la respuesta en un objeto de JavaScript (esto asume que el cuerpo de la respuesta este en formato JSON ).
then (data=>{
    const menuContainer = document.getElementById
    ('menu-container');
    //Que hace?  aqui se procesan los datos de JSON ya convertidos se obtienen una referencia el contenidos del menu en el HTML me diante el getElementById('menu-container'), y luego se itera sobre los elementos (categorias) del menu 
    
    data.items.forEach (category => {
        const categoryTitle = document.createElement ('h2')

        //Que hace? aqui se crea un elemnto h2,se asigna el nombre de la categoria como su contenido de texto y luego se añade este titulo al contenedor del menu/.

        categoryTitle.textContext = category.category;
        menuContainer.appendChild (categoryTitle);
        const table = document.createElement
        ('table')

        //Que hace? se crea un elemento table para cada categoria. Ademas se crea el encabezado (tableHead) con las columnas pertinentes.table body se inicializa vacio y se llenara con los elementos de la categoria.

        const tableHead = '<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>'
        let tableBody = '';

        //Como funciona? para cada categoria en los datos se realizan varios pasos: Para crear un titulo para la caregoria (se crea un elemento <h2> para el titulo de la categoria, se establece su contenido de texto al nombre de la categoria  (categoru.category), luego se agrega el contenedor del menu)
         //Se crea una tabla para los elemntos de esas categorias: se genera una tabla para cada categoria (primero se define el encabezado de la tabla <th>foto</th><th>Desacripcion</th><th>Prrcio</th>).

         category.items.forEach(item => {
            tableBody += <tr>
                <td> img src ="${item.image} alt="${item.name}"</td>
                <td>${ item.name } - "${item.description}"</td>
                <td>${item.price}</td>
            </tr>;
        });




    });
});