import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponentDirectiveComponent } from './Components/ExampleComponentDirective/ExampleComponentDirective.component';
import { ExampleStructuralDirectiveComponent } from './ExampleStructuralDirective/ExampleStructuralDirective.component';
import { ExampleAttributeDirectiveComponent } from './ExampleAttributeDirective/ExampleAttributeDirective.component';
import { AppCustomIf } from './appCustomIf';
// import { DirectivesComponent } from './Directives.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleComponentDirectiveComponent,
    ExampleStructuralDirectiveComponent,
    ExampleAttributeDirectiveComponent,
    AppCustomIf],
  exports:[
    ExampleComponentDirectiveComponent,
    ExampleStructuralDirectiveComponent,
    ExampleAttributeDirectiveComponent,
    AppCustomIf
  ]
})
export class DirectivesModule {
  
 }
