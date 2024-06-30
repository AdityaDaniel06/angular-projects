import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './customer-validator';

@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css'],
})
export class ReactiveAssignmentComponent implements OnInit {
  projectForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [
        Validators.required,
        customValidator.invalidProjectName,
        customValidator.asyncInvalidProjectName,
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const formData = this.projectForm.value;
    console.log(formData);
  }
}
