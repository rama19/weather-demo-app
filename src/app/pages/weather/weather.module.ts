import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// module imports
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { DailyForecastModule } from 'src/app/components/daily-forecast/daily-forecast.module';
import { HourlyForecastModule } from 'src/app/components/hourly-forecast/hourly-forecast.module';
import { WeatherPage } from './weather.page';
import { WeatherPageRoutingModule } from './weather-routing.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        WeatherPageRoutingModule,
        PipesModule,
        HourlyForecastModule,
        DailyForecastModule,
        ChartsModule,
    ],
    declarations: [WeatherPage],
})
export class WeatherPageModule {}
