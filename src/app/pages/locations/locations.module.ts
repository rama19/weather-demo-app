import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LocationModule } from 'src/app/components/location/location.module';

import { LocationsPageRoutingModule } from './locations-routing.module';

import { LocationsPage } from './locations.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationsPageRoutingModule,
        LocationModule,
    ],
    declarations: [LocationsPage],
})
export class LocationsPageModule {}
