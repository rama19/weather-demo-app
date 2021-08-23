import { Component, Input, OnInit } from '@angular/core';
import { HourlyForeacast } from 'src/app/models/hourly-forecast';

@Component({
    selector: 'hourly-forecast',
    templateUrl: './hourly-forecast.component.html',
    styleUrls: ['./hourly-forecast.component.scss'],
})
export class HourlyForecastComponent implements OnInit {
    @Input() public data: Array<HourlyForeacast> = [];

    constructor() {}

    ngOnInit() {}
}
