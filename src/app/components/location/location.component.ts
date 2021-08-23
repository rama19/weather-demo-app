import { Component, Input, OnInit } from '@angular/core';
import { LocationWeather } from 'src/app/models/location-weather';

// chart imports
import { ChartType } from 'chart.js';
import { SingleDataSet, Color } from 'ng2-charts';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
    @Input() public location: LocationWeather;

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

    constructor() {}

    ngOnInit() {
        this.doughnutChartData = [
            this.location.Humidity,
            100 - this.location.Humidity,
        ];
    }
}
