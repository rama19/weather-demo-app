import { Injectable } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { BiometricsService } from './biometrics.service';

const CONFIG = {
    clientId: 'weatherDemoApp',
    dialogTitle: 'FingerPrint unlock',
    dialogMessage: 'Set fingerprint',
    disableBackup: false,
};

@Injectable({
    providedIn: 'root',
})
export class AndroidBiometricsService extends BiometricsService {
    constructor(private androidFingerprintAuth: AndroidFingerprintAuth) {
        super();
    }

    showBiometrics(): Promise<boolean> {
        return this.androidFingerprintAuth
            .isAvailable()
            .then((biometrics) => {
                if (biometrics.isAvailable) {
                    return this.androidFingerprintAuth
                        .encrypt(CONFIG)
                        .then((result) => {
                            if (result.withFingerprint) {
                                return true;
                            } else if (result.withBackup) {
                                this.backupResume = true;
                                return true;
                            } else {
                                return false;
                            }
                        });
                } else {
                    return true;
                }
            })
            .catch((err) => {
                if (
                    err ===
                    this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED
                ) {
                    return false;
                }
            });
    }
}
