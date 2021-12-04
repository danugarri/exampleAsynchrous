//possible urls
const remoteTest = 'https://danugarri.000webhostapp.com/entorno_cliente/prueba.json';
const localTest = 'http://localhost/entorno_cliente/ficheroHTML/prueba.json';
const urlHtml = 'http://localhost/entorno_cliente/ficheroHTML/data.html';
const test = 'https://danugarri.000webhostapp.com/proyectos%20web/asynchronous_example/data.html'
//DOM
const button = document.getElementById('button');
//HTTP REQUEST
 const  makeRequest = () => {
        fetch(test,
          {
            //mode: 'no-cors', // no-cors, *cors, same-origin
            headers: {
              'Access-Control-Allow-Origin':  window.location.href,
              'Content-Type': 'multipart/form-data',
            }
          }
        )
          .then(response => {
            console.log(response);
            return response.text();
          })
          .then(data => {
            console.log(data);
            return document.body.innerHTML = data;
          })
          .catch(error => console.log(error));

      }
 const handleClick =  () => {
   //Emulating asynchronous request
    document.body.innerHTML = '    <div id= "loader"></div>'
    setTimeout(
     () => makeRequest(),3000
      )
  }
//event listener onClick
button.addEventListener('click',handleClick);
