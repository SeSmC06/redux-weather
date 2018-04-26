import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherChart from '../components/WeatherChart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lat: latitude, lon: longitude } = cityData.city.coord;
    return (
      <tr key={name}>
        <td>
          <GoogleMap latitude={latitude} longitude={longitude} />
        </td>
        <td>
          <WeatherChart data={temps} color={'red'} unit={'K'} />
        </td>
        <td>
          <WeatherChart data={pressures} color={'purple'} unit="hPa" />
        </td>
        <td>
          <WeatherChart data={humidities} color={'blue'} unit="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
