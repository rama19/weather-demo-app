import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { DomController } from '@ionic/angular';

import { themes } from 'src/app/theme/theme-const';

// enum imports
import { ThemeEnum } from 'src/app/enums/theme.enum';

// interface imports
import { Theme } from 'src/app/models/theme';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    public themeColor = [
        { name: ThemeEnum.Default, class: 'light' },
        { name: ThemeEnum.Dark, class: 'dark' },
        { name: ThemeEnum.Green, class: 'green' },
    ];

    private themes: Theme[] = [];
    private currentTheme: string = '';

    constructor(
        private domCtrl: DomController,
        @Inject(DOCUMENT) private document
    ) {
        this.themes = themes;
    }

    findTheme(): void {
        let tempIndex = this.themes.findIndex(
            (t: any) => t.name === this.currentTheme
        );
        if (tempIndex > -1) {
            this.setTheme(this.themes[this.currentTheme].name);
        }
    }

    setTheme(name): void {
        let theme = this.themes.find(
            (theme) => theme.name === name.toLowerCase()
        );
        this.domCtrl.write(() => {
            theme.styles.forEach((style) => {
                document.documentElement.style.setProperty(
                    style.variable,
                    style.value
                );
            });
        });
    }
}
