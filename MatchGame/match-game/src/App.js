import React from "react"
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "366d4bfa1e777e20eb3961a0869f9b4f"

class App extends React.Component {

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data)
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather}/>
        <Weather />
      </div>
    );
  }  
  
}

export default App;
