import React, { Component } from 'react';
import './App.css';
import Topheader from './components/Topheader/Topheader';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  };

  getWeather =  async (e)=>{ 
        
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;

    const api_key = "&APPID=ff05166f3c7814d58199e22969528af4";
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state}${api_key}`);
  const data = await api_call.json();
  
  if ( city) {
    console.log (data);
    this.setState({
    temperature: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    description: data.weather[0].description,
    error: ""
  });
} else {
    console.log (data);
    this.setState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "Please enter the value."
  });
}
  
  }

  render() {
    return (
      <div>
        <Topheader />
        <Form getWeather={this.getWeather} />
        <Weather temperature ={this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
        <button onClick={this.test}>TEST</button>
      </div>
  );
  }
}


export default App;
