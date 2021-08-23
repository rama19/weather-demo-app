import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocationsPage } from './locations.page';
import { Storage } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

describe('LocationsPage', () => {
    let component: LocationsPage;
    let fixture: ComponentFixture<LocationsPage>;
    let locations: Array<string> = ['London'];
    let locationsWeather: Array<any> = [
        {
            Name: 'London',
            Country: 'GB',
            Temp: '23',
            MaxTemp: '27',
            MinTemp: '19',
            Humidity: 20,
        },
    ];

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [IonicModule.forRoot(), HttpClientModule],
                declarations: [LocationsPage],
                providers: [Storage],
            }).compileComponents();

            fixture = TestBed.createComponent(LocationsPage);
            locations = ['London'];
            locationsWeather = [
                {
                    Name: 'London',
                    Country: 'GB',
                    Temp: '23',
                    MaxTemp: '27',
                    MinTemp: '19',
                    Humidity: 20,
                },
            ];
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
