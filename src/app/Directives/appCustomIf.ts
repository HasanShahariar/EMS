// export class AppCustomIf {

import { Directive, Input,OnInit,TemplateRef, ViewContainerRef } from "@angular/core";

// }
@Directive({
    selector: '[appCustomIf]',
  })
  export class AppCustomIf implements OnInit {
   @Input () appCustomIf: boolean = true;
    ngOnInit () {
     if (this.appCustomIf){
        this.vcRef.createEmbeddedView(this.templateRef);
     }
     else{
         this.vcRef.clear();
     }
        
    }
    constructor(
      private templateRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
     ) { }
  }