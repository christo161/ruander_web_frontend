import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrls: ['./vizsgafeladat.component.css']
})
export class VizsgafeladatComponent {
  suly_var:number=1;
  magassag_var:number=1;

  get_tti():number{
    return this.suly_var/(this.magassag_var*this.magassag_var);
  }

  ttis:Array<string>=[];

  save_tti():void {
    this.ttis.push(`Az ${this.suly_var}kg testsúlyú és ${this.magassag_var}m magasságú ember testtömeg indexe: ${this.get_tti()}`);
  }
}
