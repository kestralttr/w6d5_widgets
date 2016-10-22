import React from "react";

export default class Weather extends React.Component {

  constructor(){
    super();
    let geo = navigator.geolocation;
    let lat = 0;
    let long = 0;
    geo.getCurrentPosition(function(pos){
      lat = pos.coords.latitude;
      long = pos.coords.longitude;
    });
    this.state = { lat: lat, lon: long, weather: {} };
    this.fetchData();
  }

  render() {

    return (
      <div key={"weather"}>
        {this.state.weather.main.temp}
      </div>
    );
  }

  fetchData() {
    let that = this;
    var request = new XMLHttpRequest();
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=b1b15e88fa797225412429c1c50c122a1&apikey=523af8b42c7084b89eb2e44ba3b9df79`;
    request.open('GET', api, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let resp = request.responseText;
        console.log(resp);
        that.setState({ weather: resp });
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();
    }

}
