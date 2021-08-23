import { Component, ViewChild } from '@angular/core';
import { IonMenu, Platform } from '@ionic/angular';

// cordova imports
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import {
    NativeGeocoder,
    NativeGeocoderOptions,
    NativeGeocoderResult,
} from '@ionic-native/native-geocoder/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { StorageService } from './services/storage/storage.service';
import { Coordinates } from './models/coordinates';
import { Storage } from '@ionic/storage-angular';

import { ThemeService } from './services/theme/theme.service';
import { StorageItem } from './enums/storage-item.enum';
import { ThemeEnum } from './enums/theme.enum';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {
    @ViewChild(IonMenu) public sidemenu: IonMenu;

    private geoencoderOptions: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5,
    };

    constructor(
        private storageService: StorageService,
        private themeService: ThemeService,
        private geoLocation: Geolocation,
        private lottieSplashScreen: LottieSplashScreen,
        private nativeGeocoder: NativeGeocoder,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private platform: Platform,
        private storage: Storage
    ) {
        this.initApp();
        if (this.storageService.getStorageItem(StorageItem.Theme)) {
            this.themeService.setTheme(
                this.storageService.getStorageItem(StorageItem.Theme)
            );
        } else {
            this.themeService.setTheme(ThemeEnum.Default);
        }
    }

    ngOnInit() {}

    private initApp() {
        // create ionic storage
        this.storage.create();
        this.platform.ready().then(() => {
            this.lottieSplashScreen.show(
                'public/assets/lottie-splash/lottie-animation.json',
                false,
                1024,
                768
            );
            this.geoLocation
                .getCurrentPosition()
                .then((resp) => {
                    if (resp) {
                        let values: Coordinates = {
                            Lat: resp.coords.latitude,
                            Lng: resp.coords.longitude,
                        };
                        this.storageService.setStorageItem(
                            'coordinates',
                            values
                        );
                        this.getAddressFromCoords(values.Lat, values.Lng);
                    }
                })
                .catch((err) => {
                    console.log('Location error: ', err);
                });

            setTimeout(() => {
                this.lottieSplashScreen.hide();
            }, 3000);

            this.statusBar.styleDefault();
        });

        if (this.platform.is('android')) {
            this.statusBar.backgroundColorByHexString('#0e0e0e');
            this.statusBar.hide();
        }
    }

    private getAddressFromCoords(lat: number, lng: number) {
        let address: string = '';
        this.nativeGeocoder
            .reverseGeocode(lat, lng, this.geoencoderOptions)
            .then((result: NativeGeocoderResult[]) => {
                address = this.getLocationAddress(result[0]);
                this.storageService.setStorageItem('address', address);
            })
            .catch((error: any) => {
                alert('Error getting location' + JSON.stringify(error));
            });
    }

    private getLocationAddress(item) {
        let obj = [];
        let address = '';
        for (let key in item) {
            obj.push(item[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length) address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }

    public handleMenuClose() {
        this.sidemenu.close();
    }
}
