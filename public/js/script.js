const submitBtn = document.getElementById("submit_btn");
const cityName = document.getElementById("cityName");
const cityRes = document.getElementById("city_name");
const tempDegree = document.querySelector(".temp_degree");
const tempStatus = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");



const getInfo = async (e) => {
    e.preventDefault();
    let cityValue = cityName.value;
    if(cityValue === ""){
        cityRes.innerText = "Enter City Name Before Search";
        dataHide.classList.add("data_hide");
    }else{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&unit=metric&appid=5e85e81627647930281aa665a6515377`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            cityRes.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            tempDegree.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;
            // condition to check weather status
            if(tempMood === "Smoke"){
                tempStatus.innerHTML = "<i class='bi bi-cloud-fog-fill' style='color:grey'></i>"
            }else if(tempMood === "Haze"){
                tempStatus.innerHTML = "<i class='bi bi-cloud-fog2-fill style='color:grey''></i>"
            }else if(tempMood === "Clouds"){
                tempStatus.innerHTML = "<i class='bi bi-cloud-fill style='color:grey''></i>"
            }else if(tempMood === "Rain"){
                tempStatus.innerHTML = "<i class='bi bi-cloud-hail-fill style='color:grey''></i>"
            }else if(tempMood === "Mist"){
                tempStatus.innerHTML = "<i class='bi bi-cloud-fog style='color:grey''></i>"
            }else{
                tempStatus.innerHTML = "<i class='bi bi-brightness-high-fil style='color:grey''></i>"
            }

            dataHide.classList.remove("data_hide");

        }catch{
            cityRes.innerText = "Please Provide Valid City Name";
            dataHide.classList.add("data_hide");
        }
        
    }
    
    
};

submitBtn.addEventListener("click", getInfo);

// date to temp info box
const date = document.getElementById("date");

const getDate = new Date().getDate();
const getMonth = new Date().getMonth();
const getYear = new Date().getFullYear();
date.innerText = `${getDate}/${getMonth}/${getYear}`;

// Day to tempInfo box

const getCurrentDay = () =>{
    let weekDay = new Array(7);
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";

    let currentTime = new Date();
    let days = weekDay[currentTime.getDate()];
    let day = document.getElementById("day");
    day.innerText = days;
}

// getCurrentDay();