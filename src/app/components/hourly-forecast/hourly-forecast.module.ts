import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourlyForecastComponent } from './hourly-forecast.component';

@NgModule({
    imports: [CommonModule],
    declarations: [HourlyForecastComponent],
    exports: [HourlyForecastComponent],
})
export class HourlyForecastModule {}
