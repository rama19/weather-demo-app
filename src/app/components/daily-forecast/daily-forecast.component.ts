import { Component, Input, OnInit } from '@angular/core';
import { DailyForecast } from 'src/app/models/daily-forecast';

@Component({
    selector: 'daily-forecast',
    templateUrl: './daily-forecast.component.html',
    styleUrls: ['./daily-forecast.component.scss'],
})
export class DailyForecastComponent implements OnInit {
    @Input() public data: Array<DailyForecast> = [];

    constructor() {}

    ngOnInit() {}
}
