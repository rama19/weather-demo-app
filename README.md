# weather-demo-app

Ionic weather demo app - Weather app with current, daily, hourly forecast. Optional unit of measurement (Celcius or Fahrenheiht). Forecast for desired cities user want.

## Prerequisites

-   Download nodejs from https://nodejs.org/en/download/current/ and install `node` and `npm`

```bash
node -v
 - should be >= 14.15.0
npm -v
 - should be >= 7.20.5
```

## Getting Started

-   Clone this repository

-   Install Ionic, cordova and node_modules

    ```bash
    $ npm uninstall -g ionic cordova
    $ npm install -g ionic cordova
    $ npm install
    ```

-   Get weather API key from [OpenWeatherMap](https://openweathermap.org)
    -   Replace APIkey in `src/environments/environment.ts`
    ```js
    export const environment = {
        production: false,
        APIkey: "307410ce5a7ece647977acdb6473a1611",
        APIcoords: "https://api.openweathermap.org/data/2.5/onecall",
        APIurl: "https://api.openweathermap.org/data/2.5/",
    };
    ```

## Run

#### Browser

```bash
    # iOS
    ionic serve --platform ios
    # Android
    ionic serve --platform android
    # All Platforms(iOS, Android and Windows)
    ionic serve --lab
```

### Android

```bash
    $ ionic cordova platform add android
    $ ionic cordova build android --prod
    $ ionic cordova run android --prod
```

### iOS

```bash
    $ ionic cordova platform add ios
    $ ionic cordova build ios --prod
```

    Run using XCode
