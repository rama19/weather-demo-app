import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

// service imports
import { StorageService } from 'src/app/services/storage/storage.service';
import { WeatherService } from 'src/app/services/weather/weather.service';

// utility imports
import { CurrentForecast } from 'src/app/models/current-forecast';
import { DailyForecast } from 'src/app/models/daily-forecast';
import { HourlyForeacast } from 'src/app/models/hourly-forecast';
import { TransformUomPipe } from 'src/app/pipes/transform-uom/transform-uom.pipe';
import { fromUnixTime, format, isToday, isTomorrow } from 'date-fns';

// chart imports
import { ChartType } from 'chart.js';
import { SingleDataSet, Color } from 'ng2-charts';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.page.html',
    styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit, OnDestroy {
    public weatherData: any;
    public locationName: string = '';
    public displayWeatherData: any;
    public currentWeather: CurrentForecast;
    public dailyWeather: Array<DailyForecast> = [];
    public hourlyWeather: Array<HourlyForeacast> = [];

    private subsList: Array<Subscription> = [];

    public doughnutChartColors: Color[] = [
        {
            backgroundColor: ['#728FCE', '#DCDCDC'],
        },
    ];
    public doughnutChartData: SingleDataSet = [];
    public doughnutChartType: ChartType = 'doughnut';
    public options = {
        cutoutPercentage: 70,
    };

    constructor(
        public storageService: StorageService,
        private weatherService: WeatherService
    ) {
        this.locationName = this.storageService.getStorageItem('address')
            ? this.storageService.getStorageItem('address')
            : 'Zagreb';
    }

    ngOnInit() {
        this.getWeatherData();
    }

    ngOnDestroy() {
        this.subsList.forEach((item) => {
            item.unsubscribe();
        });
    }

    private getWeatherData(event?) {
        this.subsList.push(
            this.weatherService
                .getOpenWeatherByCoordinates()
                .subscribe((data: any) => {
                    this.weatherData = data;
                    this.prepareCurrentWeatherData(data.current);
                    this.prepareDailyWeatherData(data.daily);
                    this.prepareHourlyWeatherData(data.hourly);
                    // after refresh need to close loader
                    if (event) {
                        event.target.complete();
                    }
                    this.doughnutChartData = [
                        this.currentWeather.Humidity,
                        100 - this.currentWeather.Humidity,
                    ];
                })
        );
    }

    private prepareCurrentWeatherData(data: any) {
        const transformUom = new TransformUomPipe(this.storageService);
        this.currentWeather = {
            Icon: this.createIconUrl(data.weather[0].icon),
            Temp: transformUom.transform(data.temp, this.storageService),
            Status: data.weather[0].main,
            Humidity: data.humidity,
            Sunset: format(fromUnixTime(data.sunset), 'HH:mm'),
            Sunrise: format(fromUnixTime(data.sunrise), 'HH:mm'),
            UVindex: data.uvi,
            RealFeel: transformUom.transform(
                data.feels_like,
                this.storageService
            ),
            WindSpeed: data.wind_speed,
            WindDeg: data.wind_deg,
        };
    }

    private prepareDailyWeatherData(data: Array<any>) {
        this.dailyWeather = [];
        const transformUom = new TransformUomPipe(this.storageService);
        data.forEach((item: any) => {
            if (isToday(fromUnixTime(item.dt))) {
                return;
            }
            let dailyWeather: DailyForecast = {
                Date: format(fromUnixTime(item.dt), 'dd MMM'),
                Day: isTomorrow(fromUnixTime(item.dt))
                    ? 'Tomorrow'
                    : format(fromUnixTime(item.dt), 'EEEE'),
                Humidity: item.humidity,
                MaxTemp: transformUom.transform(
                    item.temp.max,
                    this.storageService
                ),
                MinTemp: transformUom.transform(
                    item.temp.min,
                    this.storageService
                ),
                Sunrise: format(fromUnixTime(item.sunrise), 'HH:mm'),
                Sunset: format(fromUnixTime(item.sunset), 'HH:mm'),
                Temperature: transformUom.transform(
                    item.temp.day,
                    this.storageService
                ),
                Weather: item.weather.main,
                Wind: item.wind_speed,
                Icon: this.createIconUrl(item.weather[0].icon),
            };
            this.dailyWeather.push(dailyWeather);
        });
    }

    private prepareHourlyWeatherData(data: Array<any>) {
        this.hourlyWeather = [];
        const transformUom = new TransformUomPipe(this.storageService);
        data.forEach((item: any) => {
            let hourly: HourlyForeacast = {
                Temperature: transformUom.transform(
                    item.temp,
                    this.storageService
                ),
                Time: format(fromUnixTime(item.dt), 'HH:mm'),
                Weather: item.weather[0].main,
                Icon: this.createIconUrl(item.weather[0].icon),
            };
            this.hourlyWeather.push(hourly);
        });
    }

    private createIconUrl(icon: string): string {
        return `http://openweathermap.org/img/w/${icon}.png`;
    }

    public refresh(e): void {
        this.getWeatherData(e);
    }
}
