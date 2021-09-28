const loadWeatherData = () => {
    const searchField = document.getElementById('inputField');
    const city = searchField.value;
    searchField.value = '';

    const searchError = document.getElementById('errorMassage');
    searchError.textContent = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'e372251f13d66913a2adc9bb8722ec0d'}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchInfo(data))
        .catch(error => errorMassage(error))
}

const errorMassage = () => {
    const errorMassage = document.getElementById('errorMassage');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 id="errorMassage" class="text-white text-center">Input a valid city name</h1>
    `;
    errorMassage.appendChild(div);
}

const searchInfo = weatherInfo => {
    const searchWeather = document.getElementById('DisplayWeather');
    searchWeather.textContent = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${weatherInfo.name}</h1>
    <h3><span>${weatherInfo.main.temp}</span>&deg;C</h3>
    <h1 class="lead">${weatherInfo.weather[0].main}</h1>    
`;
    searchWeather.appendChild(div);
}