import { Pipe, PipeTransform } from '@angular/core';

// enum imports
import { StorageItem } from 'src/app/enums/storage-item.enum';
import { TemperatureUnit } from 'src/app/enums/temperature-unit.enum';

// service imports
import { StorageService } from 'src/app/services/storage/storage.service';

const valueFractionDigits: number = 0;

@Pipe({
    name: 'transformUom',
})
export class TransformUomPipe implements PipeTransform {
    constructor(private storageService: StorageService) {}

    static getTemperatureUnit(
        tempUnit: TemperatureUnit,
        showUnit: boolean = false
    ): string {
        if (tempUnit === TemperatureUnit.Fahrenheit) {
            return showUnit ? '°F' : '°';
        }
        return showUnit ? '°C' : '°';
    }

    static convertCelsiusToFahrenheit(value: number): number {
        return +(value * 1.8 + 32).toFixed(valueFractionDigits);
    }

    static formatTemperature(value: number, tempUnit: TemperatureUnit): string {
        const unit = TransformUomPipe.getTemperatureUnit(tempUnit);
        if (tempUnit === TemperatureUnit.Celsius) {
            return `${value.toFixed(valueFractionDigits)} ${unit}`;
        }
        return `${value.toFixed(valueFractionDigits)} ${unit}`;
    }

    transform(value: number, ...args: unknown[]): string {
        return TransformUomPipe.formatTemperature(
            value,
            this.storageService.getStorageItem(StorageItem.TempUom)
        );
    }
}
