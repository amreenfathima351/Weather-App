import React, { useState } from "react";
import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";
const WeatherApp=()=>{

    let api_key="be492ad43b079c1d467773304b5ee6fd";
    const [wicon,setWicon]=useState(cloud_icon);
    const search = async () =>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

        let response= await fetch(url);
        let data= await response.json();
        const humidity=document.getElementsByClassName("humidity-percent");
        const wind=document.getElementsByClassName("wind-rate");
        const temperature=document.getElementsByClassName("weather-temp");
        const location=document.getElementsByClassName("weather-location");
        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+" km/h";
        temperature[0].innerHTML=data.main.temp+"°c";
        location[0].innerHTML=data.name;
        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }
    return(
        <div style={{backgroundImage:"linear-gradient(180deg,#130754 0%,#3b2f80 100%)"}} className=" h-[829px] w-[607px] m-[auto] mt-[75px] rounded-s-xl container">
            <div className="flex justify-center gap-[14px] pt-[60px] top-bar">
                <input type="text" className="flex w-[362px] h-[78px] bg-slate-200 border-none outline-none rounded-full text-neutral-600 pl-[40px] text-xl font-normal cityInput" placeholder="Search"/>
                <div className="flex justify-center items-center w-[78px] h-[78px] bg-slate-200 cursor-pointer rounded-full search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="mt-[29px] flex justify-center weather-image">
                <img src={wicon}/>
            </div>
            <div className="flex justify-center font-normal text-white text-9xl weather-temp">24°c</div>
            <div className="flex justify-center text-white font-normal text-6xl weather-location">London</div>
            <div className="mt-[50px] text-white flex justify-center data-container">
                <div className="m-[auto] flex gap-[12px] items-start element">
                    <img src={humidity_icon} className="mt-[10px] icon"/>  
                    <div className="font-normal text-4xl data">
                        <div className="humidity-percent">64%</div>
                        <div className="text-xl font-normal text">Humidity</div>
                    </div>  
                </div>
                <div className="m-[auto] flex gap-[12px] items-start element">
                    <img src={wind_icon} className="mt-[10px] icon"/>  
                    <div className="font-normal text-4xl data">
                        <div className="wind-rate">18 km/hr</div>
                        <div className="text-xl font-normal text">Wind Speed</div>
                    </div>  
                </div> 
            </div>            
        </div>
    )
}
export default WeatherApp