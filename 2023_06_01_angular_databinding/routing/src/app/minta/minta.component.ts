import { Component } from '@angular/core';

@Component({
  selector: 'app-minta',
  templateUrl: './minta.component.html',
  styleUrls: ['./minta.component.css']
})
export class MintaComponent {
  //interpolation example
  str_example:string="String example";

  //property binding example
  property_example:string="https://www.w3schools.com/";

  //event binding example
  event_binding_example():void {
    alert("String example");
  }

  //2way databinding example
  num_example:number=1;
}
