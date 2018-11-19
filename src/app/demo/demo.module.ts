import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { DemoRoutingModule } from './demo-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
    declarations: [ButtonsComponent, FlexboxComponent],
    imports: [ CommonModule, DemoRoutingModule, MaterialModule, FormsModule, FlexLayoutModule ],
    exports: [],
    providers: [],
})
export class DemoModule {}