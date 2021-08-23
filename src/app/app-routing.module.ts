import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyGuard } from './guards/privacy-policy.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [PrivacyPolicyGuard],
        children: [
            {
                path: 'tabs',
                loadChildren: () =>
                    import('./pages/tabs/tabs.module').then(
                        (m) => m.TabsPageModule
                    ),
            },
            {
                path: '',
                redirectTo: '/tabs/weather',
                pathMatch: 'full',
            },
        ],
    },

    {
        path: 'sidenav',
        loadChildren: () =>
            import('./pages/sidenav/sidenav.module').then(
                (m) => m.SidenavPageModule
            ),
    },
    {
        path: 'settings',
        loadChildren: () =>
            import('./pages/settings/settings.module').then(
                (m) => m.SettingsPageModule
            ),
    },
    {
        path: 'cities',
        loadChildren: () =>
            import('./pages/cities/cities.module').then(
                (m) => m.CitiesPageModule
            ),
    },
    {
        path: 'privacy-policy',
        loadChildren: () =>
            import('./pages/privacy-policy/privacy-policy.module').then(
                (m) => m.PrivacyPolicyModule
            ),
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
