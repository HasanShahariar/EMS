import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ExampleStructuralDirective',
  templateUrl: './ExampleStructuralDirective.component.html',
  styleUrls: ['./ExampleStructuralDirective.component.scss']
})
export class ExampleStructuralDirectiveComponent implements OnInit {

  isTrue = true;
  
  bdNumbers = ["Grameenphone","Banglalink","Airtel","Teletalk","Robi"]

  constructor() { }

  ngOnInit() {
  }



  truthMeasure(){
    this.isTrue = !this.isTrue;
  }

}
