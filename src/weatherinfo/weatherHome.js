import React, { useState } from "react";

import axios from "axios";

const Tempapp = () => {
    const[temperature, setTemperature] = useState("");
    const[desc, setDesc] = useState("");
    const[city, setCity] = useState("Kathmandu");


const getWeatherData = (city) => {
    axios({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fbbbf4d9de651b40b9d0d188076b2ae`
    })
    .then((response) => {
        console.log(response.data.main.temp);
        // Kelvin to Celsius
        setTemperature(response.data.main.temp - 273.15);
        setDesc(response.data.weather[0].main);
    })
    .catch((error) => {
        console.log(error);
    });
    };


 
        return (
            <>
            <div
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                height:"70px",
                width:"100%",
                backgroundColor: "#226ba3",
                fontSize: "30px",
                color: "#fff",
            }}
            >
                Weather App
                </div>
                <br />
            <div style={{ marginLeft: "33%"}}>
                <div style ={{height: "150px",
                            width: "450px",
                            backgroundColor: "#94e5ff",
                            display:"flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "25px",
                            }}
                        >
                            {new Date().toLocaleString()}
                            <br /> 
                            {city} Weather
                            <br/>
                            {Math.round(temperature * 100)/100}℃ - {desc}

                        </div>
                        <br />
                        <div style ={{
                           textAlign :"left",
                        }}>
                        <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        />
                       
                       <button
                       onClick={() => {
                           getWeatherData(city);
                       }}
                       >
                           GET
                       </button>
                       </div>
            </div>
           
            </>
        );
    }


export default Tempapp;