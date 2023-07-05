import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  shopping_list:Array<string> = ["apple", "pear", "plum", "peach", "nut"];
}
