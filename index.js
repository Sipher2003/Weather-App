const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0fed759dfamsha0f79b4d5c444b1p1667f7jsn9dcb53cb1e40',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    