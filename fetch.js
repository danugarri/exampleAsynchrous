//possible urls
const remoteTest = 'https://danugarri.000webhostapp.com/entorno_cliente/prueba.json';
const localTest = 'http://localhost/entorno_cliente/ficheroHTML/prueba.json';
const urlHtml = 'http://localhost/entorno_cliente/ficheroHTML/data.html';
const test = 'https://github.com/danugarri/exampleAsynchrous/blob/master/data.html'
//DOM
const button = document.getElementById('button');
//HTTP REQUEST
 const  makeRequest = () => {
        fetch(test,
          {
            //mode: 'no-cors', // no-cors, *cors, same-origin
            headers: {
              'Access-Control-Allow-Origin': 'http://127.0.0.1:5500' || window.location.href,
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
    document.body.innerHTML = '<img style = "height :150px"  src ="./img/loading.jpg" alt ="loading"/>'
    setTimeout(
     () => makeRequest(),3000
      )
  }
//event listener onClick
button.addEventListener('click',handleClick);
