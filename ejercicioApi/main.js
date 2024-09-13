let contenedor = document.getElementById("contenedor");

fetch("https://jsonplaceholder.typicode.com/users")
.then(resp => resp.json())
.then(data => {
    console.log(data)
     data.forEach(users => {
         contenedor.innerHTML += `<h2>Nombre: ${users.name}</h2>
                                 <h3>Usuario: ${users.username} </h3>
                                 <h4>Email: ${users.email} </h4>`
     } )});