# WeatherApp

A simple weather application built using React.js,JavaScript,Tailwind CSS and OpenWeatherAPI to display real-time weather information based on user input.

## Features

- **Search Functionality:** Users can input the name of a city to get real-time weather details.
- **Weather Icons:** Displays weather icons based on the current weather conditions.
- **Temperature Display:** Shows the temperature in Celsius.
- **Location Information:** Displays the city name for the provided location.
- **Additional Weather Details:** Includes humidity and wind speed information.

## Tech Stack

- **React.js:** Frontend library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/amreenfathima351/Weather-App.git
2. Navigate to the project directory:
    ```bash
    cd Weather-App
3. Install dependencies:
    ```bash
    npm start
4. Start the development server:
      ```bash
      npm start
This will open the app in your default web browser or else open your browser and go to http://localhost:3000.
## Configuration
- The Tailwind CSS configuration can be found in tailwind.config.js.
- The main application code is in src/Components/WeatherApp/WeatherApp.js.
- Styling is done using Tailwind CSS and can be customized in the WeatherApp.css file.

## API Key
The app uses the OpenWeatherMap API to fetch weather data. Make sure to replace the API key in the getData function in src/Components/Weather/WeatherApp.js with your own API key. You can obtain a free API key by signing up on the [OpenWeatherApp](https://openweathermap.org/) website.
   ```bash
   // Replace 'YOUR_API_KEY' with your actual API key
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
```

## Deployment
This app is deployed using Vercel. You can deploy your instance by following the deployment instructions provided by Vercel or any other hosting service of your choice.

## License
This project is licensed under the [MIT License](https://github.com/amreenfathima351/Weather-App/blob/main/LICENSE).
