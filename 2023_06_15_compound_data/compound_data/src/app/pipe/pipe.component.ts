import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  text_example:string = "Szeretem az angulart";

  number_example:number = Math.PI;

  currency_example:number = 100;

  date_example:Date = new Date();
}
