import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyPage } from './privacy-policy';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: PrivacyPolicyPage,
    },
];

@NgModule({
    imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [PrivacyPolicyPage],
})
export class PrivacyPolicyModule {}
