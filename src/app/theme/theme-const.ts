import { Theme } from 'src/app/models/theme';

export const themes: Theme[] = [
    {
        name: 'light',
        styles: [
            { variable: '--ion-color-primary', value: '#2a2a2a' },
            {
                variable: '--ion-color-primary-rgb',
                value: '244, 245, 248',
            },
            {
                variable: '--ion-color-primary-contrast',
                value: '#000000',
            },
            {
                variable: '--ion-color-primary-contrast-rgb',
                value: '0, 0, 0',
            },
            {
                variable: '--ion-color-primary-shade',
                value: '#d7d8da',
            },
            {
                variable: '--ion-color-primary-tint',
                value: '#f5f6f9',
            },
            {
                variable: '--ion-item-ios-background-color',
                value: '#ffffff',
            },
            {
                variable: '--ion-item-md-background-color',
                value: '#ffffff',
            },
            {
                variable: '--ion-tabbar-background-color',
                value: '#fff',
            },
            {
                variable: '--ion-tabbar-ios-text-color-active',
                value: '#000000',
            },
            {
                variable: '--ion-tabbar-md-text-color-active',
                value: '#000000',
            },
            {
                variable: '--ion-background-color',
                value: '#ffffff',
            },
        ],
    },
    {
        name: 'green',
        styles: [
            { variable: '--ion-color-primary', value: '#B5EAAA' },
            {
                variable: '--ion-color-primary-rgb',
                value: '248,56,58',
            },
            {
                variable: '--ion-color-primary-contrast',
                value: '#ffffff',
            },
            {
                variable: '--ion-color-primary-contrast-rgb',
                value: '255,255,255',
            },
            {
                variable: '--ion-color-primary-shade',
                value: '#da3133',
            },
            {
                variable: '--ion-color-primary-tint',
                value: '#f94c4e',
            },
            {
                variable: '--ion-item-ios-background-color',
                value: '#ffffff',
            },
            {
                variable: '--ion-item-md-background-color',
                value: '#ffffff',
            },
            {
                variable: '--ion-tabbar-background-color',
                value: '#fff',
            },
            {
                variable: '--ion-tabbar-ios-text-color-active',
                value: '#000000',
            },
            {
                variable: '--ion-tabbar-md-text-color-active',
                value: '#000000',
            },
            {
                variable: '--ion-background-color',
                value: '#254117',
            },
        ],
    },
    {
        name: 'dark',
        styles: [
            { variable: '--ion-color-primary', value: '#92949c' },
            {
                variable: '--ion-color-primary-rgb',
                value: '34,34,34',
            },
            {
                variable: '--ion-color-primary-contrast',
                value: '#ffffff',
            },
            {
                variable: '--ion-color-primary-contrast-rgb',
                value: '255,255,255',
            },
            {
                variable: '--ion-color-primary-shade',
                value: '#1e2023',
            },
            {
                variable: '--ion-color-primary-tint',
                value: '#383a3e',
            },
            {
                variable: '--ion-item-ios-background-color',
                value: '#717171',
            },
            {
                variable: '--ion-item-md-background-color',
                value: '#717171',
            },
            {
                variable: '--ion-tabbar-background-color',
                value: '#222428',
            },
            {
                variable: '--ion-tabbar-ios-text-color-active',
                value: '#ffffff',
            },
            {
                variable: '--ion-tabbar-md-text-color-active',
                value: '#ffffff',
            },
            {
                variable: '--ion-background-color',
                value: '#383838',
            },
        ],
    },
];
