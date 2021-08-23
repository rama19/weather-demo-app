import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'weather',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../weather/weather.module').then(
                                (m) => m.WeatherPageModule
                            ),
                    },
                ],
            },
            {
                path: 'locations',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../locations/locations.module').then(
                                (m) => m.LocationsPageModule
                            ),
                    },
                ],
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
