import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { StorageItem } from 'src/app/enums/storage-item.enum';

import { Router } from '@angular/router';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

@Component({
    selector: 'app-privacy-policy',
    templateUrl: 'privacy-policy.html',
    styleUrls: ['privacy-policy.scss'],
})
export class PrivacyPolicyPage {
    constructor(
        public storage: Storage,
        private router: Router,
        private lottieSplashScreen: LottieSplashScreen
    ) {
        setTimeout(() => {
            this.lottieSplashScreen.hide();
        }, 100);
    }

    accept() {
        this.storage
            .set(StorageItem.PrivacyPolicy, true)
            .then((_) => this.router.navigateByUrl('tabs/weather'));
    }
}
