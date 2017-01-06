var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7c855b0c5950a76b27494fef83b956e5&units=imperial';
//7c855b0c5950a76b27494fef83b956e5
function getTemp(location){
        var endcodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_URL}&q=${endcodedLocation}`;

      return  axios.get(requestUrl).then(function(resp){
            if(resp.data.cod && resp.data.message){
                throw new Error(resp.data.message);
            }else{
                return resp.data.main.temp;
            }
        }, function(err){
            throw new Error(err.data.message);
        });
    };


module.exports = {
    getTemp: function(location) {
        console.info(location);
        var endcodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_URL}&q=${endcodedLocation}`;

      return  axios.get(requestUrl).then(function(resp){
            if(resp.data.cod && resp.data.message){
                throw new Error(resp.data.message);
            }else{
                return resp.data.main.temp;
            }
        }, function(err){
            throw new Error(err.data.message);
        });
    }
};