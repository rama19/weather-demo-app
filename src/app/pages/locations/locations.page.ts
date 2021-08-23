import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// enum imports
import { LocationWeather } from 'src/app/models/location-weather';
import { StorageItem } from 'src/app/enums/storage-item.enum';

// pipe imports
import { TransformUomPipe } from 'src/app/pipes/transform-uom/transform-uom.pipe';

// service imports
import { StorageService } from 'src/app/services/storage/storage.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

@Component({
    selector: 'app-locations',
    templateUrl: './locations.page.html',
    styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
    public locations: Array<string> = [];
    public locationsWeather: Array<any> = [];

    constructor(
        private storageService: StorageService,
        private weatherService: WeatherService
    ) {
        this.locations = this.storageService.getStorageItem(StorageItem.Cities);
    }

    ngOnInit() {
        this.getLocationsWeatherData();
    }

    private getLocationsWeatherData() {
        this.locations.forEach((location: string) => {
            this.weatherService
                .getWeatherByCityName(location)
                .subscribe((weather) => {
                    this.prepareDataForDisplay(weather);
                });
        });
    }

    private prepareDataForDisplay(data: any) {
        const transformUom = new TransformUomPipe(this.storageService);
        let weather: LocationWeather = {
            Name: data.name,
            Country: data.sys.country,
            Temp: transformUom.transform(data.main.temp, this.storageService),
            MinTemp: transformUom.transform(
                data.main.temp_min,
                this.storageService
            ),
            MaxTemp: transformUom.transform(
                data.main.temp_max,
                this.storageService
            ),
            FeelsLike: transformUom.transform(
                data.main.feels_like,
                this.storageService
            ),
            Humidity: data.main.humidity,
            Status: data.weather.main,
            WindSpeed: data.wind.speed,
        };

        this.locationsWeather.push(weather);
    }
}
