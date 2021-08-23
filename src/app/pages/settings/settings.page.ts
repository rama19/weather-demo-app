import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

// enum imports
import { StorageItem } from 'src/app/enums/storage-item.enum';
import { TemperatureUnit } from 'src/app/enums/temperature-unit.enum';

// service imports
import { BiometricsService } from 'src/app/services/biometrics/biometrics.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements ViewWillEnter {
    public defaultUom: number;
    public screenLockSettings: boolean;

    public temperatureUnit = TemperatureUnit;

    constructor(
        private biometricsService: BiometricsService,
        private storageService: StorageService,
        private storage: Storage
    ) {}

    ionViewWillEnter() {
        this.storage.get(StorageItem.TempUom).then((unit) => {
            if (unit === null) {
                this.defaultUom = 0;
            } else {
                this.defaultUom = unit;
            }
        });

        this.storage.get(StorageItem.ScreenLock).then((screenLockSetting) => {
            if (screenLockSetting === null) {
                this.screenLockSettings = false;
            } else {
                this.screenLockSettings = screenLockSetting;
            }
        });
    }

    public saveDefaultUnit(e: CustomEvent) {
        const tempUnit: TemperatureUnit = e.detail.value;
        this.defaultUom = tempUnit;
        this.storage.set(StorageItem.TempUom, tempUnit);
        this.storageService.setStorageItem(StorageItem.TempUom, tempUnit);
    }

    public saveScreenLockSettings() {
        this.biometricsService.showBiometrics().then((biometricsPassed) => {
            if (biometricsPassed) {
                this.storage.set(
                    StorageItem.ScreenLock,
                    this.screenLockSettings
                );
            } else {
                this.screenLockSettings = !this.screenLockSettings;
            }
        });
    }
}
