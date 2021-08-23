import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Coordinates } from 'src/app/models/coordinates';
import { StorageService } from '../storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private coordinates: Coordinates;

    constructor(
        private storageService: StorageService,
        private httpClient: HttpClient
    ) {
        this.coordinates = this.storageService.getStorageItem('coordinates');
    }

    // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    public getOpenWeatherByCoordinates() {
        return this.httpClient.get(
            environment.APIcoords +
                `?lat=${this.coordinates.Lat}&lon=${this.coordinates.Lng}&units=metric&appid=` +
                environment.APIkey
        );
    }

    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    public getWeatherByCityName(city: string) {
        return this.httpClient.get(
            environment.APIurl +
                `weather?q=${city}&units=metric&appid=${environment.APIkey}`
        );
    }
}
