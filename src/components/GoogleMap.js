import React, { Component } from 'react';

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.latitude,
        lng: this.props.longitude
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}
