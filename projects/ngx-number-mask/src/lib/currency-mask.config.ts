import { InjectionToken } from "@angular/core";

export interface NumberMaskConfig {

    align: string;
    allowNegative: boolean;
    decimal: string;
    precision: number;
    prefix: string;
    suffix: string;
    thousands: string;
}

export let NUMBER_MASK_CONFIG = new InjectionToken<NumberMaskConfig>("number.mask.config");