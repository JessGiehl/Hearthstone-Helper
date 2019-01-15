//function that submits search value with api to return results, prints to the DOM
function searchSubmit(){

  //variables for storing api string
  var url= "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/dark?collectible=1";

  fetch(url,{
  headers:{
    'X-RapidAPI-Key': 'dKepq9Zkv6mshJs5ES5eo7zSntw7p1TgsRtjsnT5Ur3DIYZNDe'
  }})
    .then(function(response) {
      //turn response into a JSON object
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
        //create a string to store adjacentHTML
        var output = `<ul class="resultlist">`;

        for (var i = 0; i < myJson.length; i++) {
          output +=
          ` <li>
              <img src="${myJson[i].img}">
              <h3>${myJson[i].name}</h3>
            </li>`;
        }
        output += `</ul>`;

        document.querySelector('h2').insertAdjacentHTML('afterend', output);
    })
    .catch(error => console.error(error));
}

var search = document.getElementById('search');
console.log(search);
//when form is submitted, run searchSubmit()
search.addEventListener("click", searchSubmit);
