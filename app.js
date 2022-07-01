let data = () => {

    let city = document.querySelector("#search").value;
    axios.get(`https://api.weatherapi.com/v1/current.json?key=3a4c3daef759499091d212220223006&q=${city}`)
        .then(function (response) {
            // handle success
            const data = response.data;

            console.log(data);

            let icon = data.current.condition.icon;
            icon.replace("/file// ");
            document.querySelector("#wind_kph").innerText = "Wind: " + data.current.wind_kph + "kph";
            document.querySelector("#temp_c").innerText = data.current.temp_c + "°C";
            document.querySelector("#city").innerText = data.location.name
            document.querySelector("#condition").innerText = data.current.condition.text;
            document.querySelector("#feel").innerText = "Feels: " + data.current.feelslike_c+"°C";
            document.querySelector("#feel2").innerText = "Feels: " + data.current.feelslike_f+"°F";
            document.querySelector("#humidity").innerText = "Humidity: " + data.current.humidity+"%";
            document.querySelector("#precip_in").innerText = "Precipitation: " + data.current.precip_in+"%";
            document.querySelector("#visibility").innerText = "Visibility : " + data.current.vis_km + "km";
            document.querySelector("#icon").src = icon;

        })

}

