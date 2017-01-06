var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('weatherAPI');
var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7c855b0c5950a76b27494fef83b956e5&units=imperial';

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        } 
    },
    handleSearch: function (location){
        this.setState({
            isLoading: true
        });
       var self = this;
        WeatherAPI.getTemp(location).then(function(temp){
            self.setState({
            location: location,
            temp:temp,
            isLoading: false
        });
        },function(error){
            alert(error);
        });

        
    },
    render: function(){

        var {temp, location, isLoading} = this.state;

        function renderMessage(){
            if(isLoading){
                return <p>Loading...</p>;
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
           <div>
                <h3>Get Weather</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
           </div>
        );
    }
});

module.exports = Weather;