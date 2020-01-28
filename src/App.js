import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';


const API_KEY = '03b65e5b66ee6cb40a435eafc29b317a';

class App extends React.Component {

  getWeather = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }

  render(){
    return (
      <div>
        <Title/>
        <Form getWeather={this.getWeather}/>
      </div>
    );
  }
  
}

export default App;
