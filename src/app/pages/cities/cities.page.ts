import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

// enum imports
import { StorageItem } from 'src/app/enums/storage-item.enum';

// service imports
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
    selector: 'app-cities',
    templateUrl: './cities.page.html',
    styleUrls: ['./cities.page.scss'],
})
export class CitiesPage implements OnInit {
    public cityName: string = '';
    public cities: Array<string> = [];

    constructor(
        private storageService: StorageService,
        private storage: Storage,
        private platform: Platform
    ) {
        if (this.platform.ready()) {
            this.storage.get(StorageItem.Cities).then((data: Array<string>) => {
                if (data) {
                    this.cities = data;
                }
            });
        } else {
            this.cities = this.storageService.getStorageItem(
                StorageItem.Cities
            );
        }
    }

    ngOnInit() {}

    public addCity() {
        this.cities.push(this.cityName);
        this.addToStorage();
        this.cityName = '';
    }

    public removeCity(city: string) {
        let tempIndex = this.cities.findIndex((c: string) => c === city);
        this.cities.splice(tempIndex, 1);
        this.addToStorage();
    }

    private addToStorage() {
        this.storageService.setStorageItem(StorageItem.Cities, this.cities);
        this.storage.set(StorageItem.Cities, this.cities);
    }
}
