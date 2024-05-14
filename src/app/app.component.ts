import { Component, ViewChild, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // @ViewChild('f') signupForm: NgForm; // anotehr way to access the form

  // defaultQues = 'pet';
  // answer = '';
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signupForm.setValue({  autofills all values
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: '',
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswers: '',
  //   //   gender: 'male',
  //   // });
  //   this.signupForm.form.patchValue({
  //     //autofills selected values
  //     userData: {
  //       username: suggestedName,
  //     },
  //   });

  //   //   onSubmit(form: NgForm){ // accessin the form
  //   // console.log(form);
  //   //   }

  //   // onSubmit() {
  //   //   //usecase : when want to access the form before submitting
  //   //   console.log(this.signupForm);
  //   // }
  // }

  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null),
      }),
      gender: new FormControl(null),
      hobbies: new FormArray( []),
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  onAddHobby() {
    const controls = new FormArray(null , Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(controls)
  }
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
}
