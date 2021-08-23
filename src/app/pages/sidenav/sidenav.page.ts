import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageItem } from 'src/app/enums/storage-item.enum';

// service imports
import { StorageService } from 'src/app/services/storage/storage.service';
import { ThemeService } from 'src/app/services/theme/theme.service';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.page.html',
    styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {
    @Output() menuClose: EventEmitter<boolean> = new EventEmitter();

    public selectTheme: string = 'default';

    constructor(
        private storageService: StorageService,
        private themeService: ThemeService,
        private router: Router
    ) {
        this.selectTheme = this.storageService.getStorageItem(
            StorageItem.Theme
        );
    }

    ngOnInit() {}

    public openSettings() {
        this.router.navigateByUrl('settings');
        this.closeMenu();
    }

    public openCities() {
        this.router.navigateByUrl('cities');
        this.closeMenu();
    }

    private closeMenu() {
        this.menuClose.emit(true);
    }

    changeTheme() {
        this.storageService.setStorageItem(StorageItem.Theme, this.selectTheme);
        this.themeService.setTheme(this.selectTheme);
    }
}
