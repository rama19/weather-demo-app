import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

// modules
import { IonicStorageModule } from '@ionic/storage-angular';

// providers
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Storage } from '@ionic/storage';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IonicStorageModule],
                declarations: [AppComponent],
                providers: [
                    Geolocation,
                    Geolocation,
                    LottieSplashScreen,
                    NativeGeocoder,
                    SplashScreen,
                    StatusBar,
                    AndroidFingerprintAuth,
                    FingerprintAIO,
                    Storage,
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();
        })
    );

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    // TODO: add more tests!
});
