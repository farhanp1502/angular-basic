import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalfeecalculatorService {

  constructor() { }
  calculate(){
    return 2.99;
  }
}

// exercise for the moment 
// 1.Create a service named rentalFeeCalculator
// 2.Put it in the rental subdirectory
// 3.Don't create a test file
// 4.Create a calculate() method that returns 2.99

