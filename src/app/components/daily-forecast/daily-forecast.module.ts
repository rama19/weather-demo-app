import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyForecastComponent } from './daily-forecast.component';

@NgModule({
    imports: [CommonModule],
    declarations: [DailyForecastComponent],
    exports: [DailyForecastComponent],
})
export class DailyForecastModule {}
