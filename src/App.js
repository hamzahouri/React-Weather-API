import React, {Component} from 'react'
import Data from './component/data'
import Form from './component/form'

const API_KEY = '53aabb81d6b38aecc5b1baf0ee637ac4';

class App extends Component {
  state = {
    temperature : '',
    city : '',
    country : '',
    humidity : '',
    description : '',
    timezone : '',
    error : ''

  }
  
  
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();
    
    // update state with data coming from api
    if (city && country) {
    this.setState({
    temperature :data.main.temp,
    city : data.name,
    country :data.sys.country,
    humidity :data.main.humidity,
    description :data.weather[0].description,
    timezone :data.timezone,
    error :''
    })
  } else {
    this.setState(
      {
        temperature : '',
        city : '',
        country : '',
        humidity : '',
        description : '',
        timezone : '',
        error : ''
    
      }
    )
  }
}

  render(){

  return (
    <div className="App">
      <Form name={this.getWeather}/>
      <Data/>
    </div>
  );
}
}
export default App;
