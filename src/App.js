import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';


const API_KEY = '03b65e5b66ee6cb40a435eafc29b317a';

class App extends React.Component {

  getWeather = async(e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=delhi,in&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data);
  }

  render(){
    return (
      <div>
        <Title/>
        <Form/>
      </div>
    );
  }
  
}

export default App;
