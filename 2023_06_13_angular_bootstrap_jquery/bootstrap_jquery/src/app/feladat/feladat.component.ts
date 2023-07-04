import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent {

    //m_number!:number;
    m_number:number=1;

    isprime(p_number:number):boolean {
      if (p_number < 2) {
        return false;
      } else if (p_number == 2) {
        return true;
      } else {
        for(let i:number = 2; i*i<p_number*p_number;++i) {
          if (p_number % i == 0 ) {
            return false;
          }
        }
        return true;
      }
    }

    print_prime():string {
      if(this.isprime(this.m_number)) {
        return "prime";
      } else {
        return "not prime";
      }
    }

    /*result:string = this.print_prime();*/

    results:Array<string> = [];

    save_results():void {
      let result:string = this.print_prime();
      this.results.push(`${this.m_number} is ${result}`);
    }

}
