let locations;
const apikey = 'f89c4ff2d6441a4134f6b13975cc84ba';



document.querySelector(".start").addEventListener('click', () => {
    
     locations = document.querySelector('.searchInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${apikey}`).then((response) => {
        let data = response.json();
        return data;

    }).then((data) => {
        let city = data.name;
        let tempf = data.main.temp;
        let tempMax= data.main.temp_max;
        let tempMin=  data.main.temp_min;
        let tempcel = Math.round((tempf - 273));
        let maxtempcel= Math.round((tempMax - 273));
        let mintempcel= Math.round((tempMin - 273));
        let dec = data.weather[0].main;
        console.log(data);



        document.querySelector('.tempFinal').innerHTML ="Temp : "+ tempcel + "<sup>o</sup>";
        document.querySelector('.tempMax').innerHTML ="Temp Max : "+ maxtempcel + "<sup>o</sup>";
        document.querySelector('.tempMin').innerHTML ="Temp Min : "+  mintempcel + "<sup>o</sup>";
        document.querySelector('.decription').innerHTML = dec;
        document.querySelector('.city').innerHTML = city;

        click();

    })

}

) 

function click(){
document.querySelector('.searchInput').value=null;

}



function defaultData(){
    document.querySelector('.searchInput').value='mumbai';
    locations = document.querySelector('.searchInput').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${apikey}`).then((response) => {
        let data = response.json();
        return data;

    }).then((data) => {
        let city = data.name;
        let tempf = data.main.temp;
        let tempMax= data.main.temp_max;
        let tempMin=  data.main.temp_min;
        let tempcel = Math.round((tempf - 273));
        let maxtempcel= Math.round((tempMax - 273));
        let mintempcel= Math.round((tempMin - 273));
        let dec = data.weather[0].main;
        console.log(data);



        document.querySelector('.tempFinal').innerHTML ="Temp : "+ tempcel + "<sup>o</sup>";
        document.querySelector('.tempMax').innerHTML ="Temp Max : "+ maxtempcel + "<sup>o</sup>";
        document.querySelector('.tempMin').innerHTML ="Temp Min : "+  mintempcel + "<sup>o</sup>";
        document.querySelector('.decription').innerHTML = dec;
        document.querySelector('.city').innerHTML = city;

        click();

    })

}