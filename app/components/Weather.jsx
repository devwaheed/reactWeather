var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var WeatherAPI = require('weatherAPI');
var ErrorModal = require('ErrorModal');
var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=7c855b0c5950a76b27494fef83b956e5&units=imperial';

var Weather = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false,

        } 
    },
    handleSearch: function (location){
        this.setState({
            isLoading: true,
            errorMessage: undefined
        });
       var self = this;
        WeatherAPI.getTemp(location).then(function(temp){
            self.setState({
            location: location,
            temp:temp,
            isLoading: false
        });
        },function(e){
            this.setState({
                isLoading: false,
                errorMessage:e.message
            });
        });

        
    },
    render: function(){

        var {temp, location, isLoading, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <p className="text-center">Loading...</p>;
            }
            else if(temp && location){
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        function renderError(){
            if(typeof errorMessage === 'string'){
                return  <ErrorModal message={errorMessage}/>;
            }
        }

        return (
           <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
           </div>
        );
    }
});

module.exports = Weather;