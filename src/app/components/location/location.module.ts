import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { LocationComponent } from './location.component';

@NgModule({
    imports: [CommonModule, ChartsModule],
    declarations: [LocationComponent],
    exports: [LocationComponent],
    entryComponents: [LocationComponent],
})
export class LocationModule {}
