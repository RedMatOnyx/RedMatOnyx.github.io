const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9d82d746ab9b4a97a81f74aae8a3582b";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {console.log(jsObject);

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', 'icon matching weather description');
// const tempK = jsObject.main.temp;
// const tempF = (kelvintemp - 273.15)*9/5+32;
    document.getElementById('current-temp').textContent = Math.round((jsObject.main.temp- 273.15)*9/5+32);

  });