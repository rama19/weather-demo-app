import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformUomPipe } from './transform-uom/transform-uom.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [TransformUomPipe],
    exports: [TransformUomPipe],
})
export class PipesModule {}
