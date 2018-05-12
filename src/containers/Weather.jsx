import React, { Component } from 'react';

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      locationAPI: 'https://freegeoip.net/json/',
      location: null,
      weather: null,
      tempSymbol: 'C',
      tempValue: '',
    };
    this.fetchData();
  }

  fetchData = async () => {
    await this.fetchLocation();
    await this.fetchWeather();
  }

  fetchLocation = async () => {
    const response = await fetch(this.state.locationAPI);
    const location = await response.json();
    this.setState({ location });
  };

  fetchWeather = async () => {
    const { longitude, latitude } = this.state.location;
    const weatherAPI = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
    const response = await fetch(weatherAPI);
    const weather = await response.json();
    this.setState({
      weather,
      tempValue: `${weather.main.temp} C`,
    });
  };

  handleTemp = () => {
    const { tempSymbol, weather } = this.state;
    switch (tempSymbol) {
      case 'C':
        this.setState({
          tempSymbol: 'F',
          tempValue: `${Math.round(((weather.main.temp * 9) / 5) + 32)} F`,
        });
        break;
      case 'F':
        this.setState({
          tempSymbol: 'C',
          tempValue: `${weather.main.temp} C`,
        });
        break;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <h2>Weather</h2>
        <div className="grid">
          {this.state.weather &&
          <div className="card card__weather">
            <h3>{this.state.weather.name}</h3>
            <p>{this.state.weather.weather[0].description}</p>
            <button onClick={this.handleTemp}>
              <h4>{this.state.tempValue}</h4>
            </button>
          </div>}
        </div>
      </div>
    );
  }
}

export default Weather;
