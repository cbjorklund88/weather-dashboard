fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=9c85576a645c250809de8ffb8202fcd6")
.then((response) => {
console.log(response)
return response.json()
}).then((data) => {

// Shows the name of the city
const nameOfCity = data.name

// temperature in city rounded to one decimal
const cityTemp = data.main.temp
const TempRounded = Math.round(cityTemp * 10) / 10;

//background color depending on temperature
if (cityTemp > 10) {
  document.getElementById("container").style.background = "#FCFF33"
}else if (cityTemp < 10){
  document.getElementById("container").style.background = "#33F6FF"
}else {
  document.getElementById("container").style.background = "#ADB2BB"
}

// shows weather
const weatherToday =  data.weather[0].main


// icon images
const imgSun = document.createElement("img")
imgSun.src =  "Images/icon.png";
const imgRain = document.createElement("img")
imgRain.src =  "Images/rain.png";
const imgCloud = document.createElement("img")
imgCloud.src =  "Images/cloud.png";

// Icon shows and change depending on the weather
   if (weatherToday === "Clear") {
     document.getElementById("img").appendChild(imgSun)
  } else if (weatherToday === "Rain") {
     document.getElementById("img").appendChild(imgRain)
  } else {
    document.getElementById("img").appendChild(imgCloud)
  }

document.getElementById("city").innerHTML = nameOfCity
document.getElementById("temperature").innerHTML = TempRounded + " °C"
document.getElementById("weather").innerHTML = weatherToday


})
