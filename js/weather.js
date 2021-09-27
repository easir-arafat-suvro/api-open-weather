// Error massage
document.getElementById('errorMassage').style.display = 'none';

const loadWeatherData = () => {
    const searchField = document.getElementById('inputField');
    const city = searchField.value;
    searchField.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'e372251f13d66913a2adc9bb8722ec0d'}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchInfo(data))
        .catch(error => errorMassage(error))
}

const errorMassage = () => {
    document.getElementById('errorMassage').style.display = 'block';
}

const searchInfo = (weatherInfo) => {
    const cityName = weatherInfo.name;
    const temparature = weatherInfo.main.temp;
    const status = weatherInfo.weather[0].main;
    document.getElementById('location').innerText = cityName;
    document.getElementById('temp').innerText = temparature;
    document.getElementById('status').innerText = status;
}
