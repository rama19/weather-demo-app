import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, Platform } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

// custom module imports
import { BiometricsModalModule } from './modals/biometrics-modal/biometrics-modal.module';
import { SidenavPageModule } from './pages/sidenav/sidenav.module';

// cordova imports
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

// service imports
import { AndroidBiometricsService } from './services/biometrics/android-biometrics.service';
import { BiometricsService } from './services/biometrics/biometrics.service';
import { IosBiometricsService } from './services/biometrics/ios-biometrics.service';
import { NoBiometricsService } from './services/biometrics/no-biometrics.service';
import { WeatherService } from './services/weather/weather.service';
import { StorageService } from './services/storage/storage.service';
import { ThemeService } from './services/theme/theme.service';

function biometricsFactory(
    platform: Platform,
    androidFingerprintAuth: AndroidFingerprintAuth,
    faio: FingerprintAIO
) {
    if (platform.is('android')) {
        return new AndroidBiometricsService(androidFingerprintAuth);
    }
    if (platform.is('ios')) {
        return new IosBiometricsService(faio);
    } else {
        return new NoBiometricsService();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        HttpClientModule,
        AppRoutingModule,
        SidenavPageModule,
        IonicStorageModule.forRoot(),
        BiometricsModalModule,
    ],
    declarations: [AppComponent],
    entryComponents: [],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        Geolocation,
        LottieSplashScreen,
        NativeGeocoder,
        SplashScreen,
        StatusBar,
        WeatherService,
        StorageService,
        ThemeService,
        Storage,
        AndroidFingerprintAuth,
        FingerprintAIO,
        {
            provide: BiometricsService,
            useFactory: biometricsFactory,
            deps: [Platform, AndroidFingerprintAuth, FingerprintAIO],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
