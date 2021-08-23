import { Injectable } from '@angular/core';
import { BiometricsService } from './biometrics.service';

@Injectable({
    providedIn: 'root',
})
export class NoBiometricsService extends BiometricsService {
    constructor() {
        super();
    }

    showBiometrics(): Promise<boolean> {
        return Promise.resolve(true);
    }
}
