import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitiesPage } from './cities.page';
import { Storage } from '@ionic/storage';

describe('CitiesPage', () => {
    let component: CitiesPage;
    let fixture: ComponentFixture<CitiesPage>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [CitiesPage],
                imports: [IonicModule.forRoot()],
                providers: [Storage],
            }).compileComponents();

            fixture = TestBed.createComponent(CitiesPage);
            component = fixture.componentInstance;
            fixture.detectChanges();
        })
    );

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // it('should render title in a ion-title tag', () => {
    //     //6
    //     const fixture = TestBed.createComponent(CitiesPage);
    //     fixture.detectChanges();
    //     const compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('ion-title').textContent).toContain(
    //         'Add cities'
    //     );
    // });
});
