const contenedor = document.createElement('div'); //crea el contenedor
contenedor.classList.add('card'); //para darle clase
document.body.appendChild(contenedor);


fetch("https://jsonplaceholder.typicode.com/users")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
   
    data.forEach(user => {
    
    let usuarioDiv = document.createElement('div');
      
     let nombre = document.createElement('h2');
      nombre.textContent = `Nombre: ${user.name}`;
      
    
      let usuario = document.createElement('h3');
      usuario.textContent = `Usuario: ${user.username}`;
      
      let email = document.createElement('h4');
      email.textContent = `Email: ${user.email}`;
      
   
      usuarioDiv.appendChild(nombre);
      usuarioDiv.appendChild(usuario);
      usuarioDiv.appendChild(email);
      
   
      contenedor.appendChild(usuarioDiv);
    });
  })
  .catch(error => {
    console.log('Error de data:', (error));
  });
  