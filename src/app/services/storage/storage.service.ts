import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    public setStorageItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public getStorageItem(key: string) {
        return localStorage.getItem(key)
            ? JSON.parse(localStorage.getItem(key))
            : null;
    }

    public removeStorageItem(key: string) {
        localStorage.removeItem(key);
    }
}
