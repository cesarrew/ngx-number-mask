import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NumberMaskDirective } from "./number-mask.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        NumberMaskDirective
    ],
    exports: [
        NumberMaskDirective
    ]
})
export class NumberMaskModule {
}