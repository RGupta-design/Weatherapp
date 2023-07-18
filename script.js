let mykey=keys.key1;
let weather={
    "apiKey": mykey,
    fetchweather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid="+mykey
        )
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data){
        const { name } = data;
        const { icon , description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "kmph";
        document.querySelector(".weather").classList.remove ("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')" 
        
    },
    search: function () {
        var letters = /^[A-Za-z]+$/;
        let x=document.querySelector(".search-bar").value
        if(x.match(letters)){
        this.fetchweather(x)}
        else{
            alert("Invalid")
        }
    },
};  

document.querySelector(".search button").addEventListener("click",function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchweather("Delhi");