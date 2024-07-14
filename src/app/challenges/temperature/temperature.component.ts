import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
})
export class TemperatureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  celsius: number | null;
  fahrenheit: number | null;

  onCelsiusChange(input: any) {
    this.fahrenheit = (parseFloat(input.target.value) * 9) / 5 + 32;
  }

  onFahrenheitChange(input: any) {
    this.celsius = ((parseFloat(input.target.value) - 32) * 5) / 9;
  }
}
