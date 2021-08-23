import { Injectable } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { BiometricsService } from './biometrics.service';

@Injectable({
    providedIn: 'root',
})
export class IosBiometricsService extends BiometricsService {
    constructor(private fingerprintAIO: FingerprintAIO) {
        super();
    }

    showBiometrics(): Promise<boolean> {
        return this.fingerprintAIO
            .show({
                description: 'Please authenticate',
                fallbackButtonTitle: 'Use Backup',
                disableBackup: false,
            })
            .then((_) => true)
            .catch((_) => false);
    }
}
