import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1 [style.color]="myColor" >This is {{name}}'s <span (click)="changeColor()">{{myColor | uppercase }}</span> root component</h1>
             <h3>(CLICK on capitalized color word to toggle color)</h3>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
    name = "Rob";
    myColor = 'red';
    
    changeColor() {
      this.myColor==="red" ? this.myColor="yellow" : this.myColor="red"
    }
}
