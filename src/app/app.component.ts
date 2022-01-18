import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bgcolor:string | undefined;
  

  themeChange(event: any){
    this.bgcolor = "$themeColor3"
    
  }
  
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit{
//   bgcolor:any;
//   colorArray:any;

//   constructor(){}
  
//   ngOnInit(){
//     this.colorArray = ["$themeColor1","$themeColor2","$themeColor3","$themeColor4"];
//     this.bgcolor = this.colorArray[0];
//     console.log("hello");
    
//   }

//   themeChange(color: any){
//     this.bgcolor=this.colorArray[color]
//     console.log(this.bgcolor,this.colorArray[color]);
//     console.log(this.bgcolor);
    
    
    
    
//   }
  
// }

