import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent {

  //ngOninit():void {
  ngAfterViewInit():void {
    $(document).ready(function(){
      $("button").click(function(){
        alert("jquery example");
      });
    });
}
}
