import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShortNumberPipe } from '../../pipes/short-number.pipe';


@Component({
  selector: 'app-resistor-calculator',
  standalone: true,
  imports: [ShortNumberPipe],
  templateUrl: './resistor-calculator.component.html',
  styleUrl: './resistor-calculator.component.css'
})
export class ResistorCalculatorComponent {
  @ViewChild('firstBand') firstBand!: ElementRef;
  @ViewChild('secondBand') secondBand!: ElementRef;
  @ViewChild('multiplier') multiplier!: ElementRef;
  @ViewChild('tolerance') tolerance!: ElementRef;
  result = 0;
  tMin = 0; // tolerance max
  tMax = 0;

  constructor() { }

  resistorCalculator(): void {
    var fsb = Number(this.firstBand.nativeElement.value + "" + this.secondBand.nativeElement.value);
    var m = Number(this.multiplier.nativeElement.value);
    var t = Number(this.tolerance.nativeElement.value);

    if (fsb > 0 && m > 0 && t > 0) {
      this.result = fsb * m;
      this.tMin = this.result - (t / 100 * this.result);
      this.tMax = this.result + (t / 100 * this.result);
    }
  }

}
