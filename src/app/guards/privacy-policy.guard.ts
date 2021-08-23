import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';

import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';
import { StorageItem } from '../enums/storage-item.enum';

@Injectable({
    providedIn: 'root',
})
export class PrivacyPolicyGuard implements CanActivate {
    constructor(private storage: Storage, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.storage.get(StorageItem.PrivacyPolicy).then((accepted) => {
            if (
                accepted &&
                (state.url === '/' || state.url === '/privacy-policy')
            ) {
                this.router.navigateByUrl('tabs/weather');
            }
            if (state.url === '/privacy-policy' && !accepted) {
                return true;
            }
            if (!accepted) {
                this.router.navigateByUrl('privacy-policy');
            } else {
                return true;
            }
        });
    }
}
