import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistance',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './resistance.component.html',
  styleUrl: './resistance.component.css'
})
export class ResistanceComponent {
  resistanceTotal = 0;
  myForm = new FormGroup({
    numResistors: new FormControl(1, [Validators.required, Validators.min(1)]),
    inputs: new FormArray([]),
    calculationOpt: new FormControl('1')
  });

  constructor() { this.updateInputs() }

  get inputs(): FormArray {
    return this.myForm.get('inputs') as FormArray;
  }


  updateInputs() {
    const numResistors = this.myForm.get('numResistors')?.value || 0;

    while (this.inputs.length < numResistors) {
      this.inputs.push(new FormControl('', Validators.required));
    }

    while (this.inputs.length > numResistors) {
      this.inputs.removeAt(this.inputs.length - 1);
    }
  }

  onSubmit() {
    const opt = this.myForm.get('calculationOpt')?.value;

    this.resistanceCalculator(opt);
  }

  resistanceCalculator(opt: any) {
    const numR = this.inputs.length;
    var parallelResistance = 0;
    this.resistanceTotal = 0;

    switch (opt) {
      case "1":
        for (var resistor of this.inputs.value)
          this.resistanceTotal = Number(this.resistanceTotal) + Number(resistor);
        break;
        case "2":
          for (var resistor of this.inputs.value)
            parallelResistance = Number(parallelResistance) + Number(1/resistor);

          this.resistanceTotal = Number(1/parallelResistance);
          break;
    }
  }
}
