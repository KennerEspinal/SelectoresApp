import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountriesRoutingModule } from './countries-routing.module';


@NgModule({
    imports: [
        CommonModule,
        CountriesRoutingModule
    ],
    exports: [],
    declarations: [
        SelectorPageComponent
    ],
    providers: [],
})
export class CountriesModule { }
