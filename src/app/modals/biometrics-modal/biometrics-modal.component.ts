import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { BiometricsService } from 'src/app/services/biometrics/biometrics.service';

@Component({
    selector: 'app-biometrics-modal',
    templateUrl: './biometrics-modal.component.html',
    styleUrls: ['./biometrics-modal.component.scss'],
})
export class BiometricsModalComponent {
    constructor(
        private biometricsService: BiometricsService,
        private modalController: ModalController
    ) {}

    closeModal(passed: boolean) {
        this.modalController.dismiss(passed);
    }

    private showBiometrics() {
        this.biometricsService.showBiometrics().then((passed) => {
            if (passed) {
                this.closeModal(passed);
            } else {
                this.showBiometrics();
            }
        });
    }
}
