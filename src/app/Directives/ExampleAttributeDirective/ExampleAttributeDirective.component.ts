import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ExampleAttributeDirective',
  templateUrl: './ExampleAttributeDirective.component.html',
  styleUrls: ['./ExampleAttributeDirective.component.scss']
})
export class ExampleAttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fontColor = "blue"

}
