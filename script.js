let btn = document.getElementById("searchButton");
let input = document.getElementById("inputField");
let div = document.getElementById("weatherResult");
let img = document.querySelector('img')

btn.addEventListener('click', ()=>{
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=5f1077f561d87b1be334b15838fc01b4`)
.then(response => response.json())
.then(data => {
    console.log(data);
    
    div.innerHTML = `
       <div class="weather">
        <h2>${data.name}</h2>
        <p>${data.weather[0].main}</p>
        <p>Temperature: ${data.main.temp}°C</p>
    </div>
    `;

   switch(data.weather[0].main
){
    case 'Clouds':
        img.src = "./cloudy.jpg";
        break;
    case 'Rain':
        img.src = "./rain.jpg";
        break;
    case 'Clear':
        img.src = "./sun.png";
        break;
    case 'Snow':
        img.src = "./snow.png"; 
        break;
    case 'Storm':
        img.src = "./storm.jpg";
   } 
    

}) })
   div.innerHTML = ''

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        btn.click();
    }
});

