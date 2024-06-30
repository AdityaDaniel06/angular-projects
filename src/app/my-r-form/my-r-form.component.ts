import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-r-form',
  templateUrl: './my-r-form.component.html',
  styleUrls: ['./my-r-form.component.css'],
})
export class MyRFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // using JS
  onOpenSignupModal() {
    const modalDiv = document.getElementById('regFrom');
    if (modalDiv !== null) {
      modalDiv.style.display = 'block';
    }
  }
  onCloseSignupModal() {
    const modalDiv = document.getElementById('regFrom');
    if (modalDiv !== null) {
      modalDiv.style.display = 'none';
    }
  }
}
