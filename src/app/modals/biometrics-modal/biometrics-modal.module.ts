import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiometricsModalComponent } from './biometrics-modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [BiometricsModalComponent],
    exports: [BiometricsModalComponent],
})
export class BiometricsModalModule {}
