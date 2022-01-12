import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser } from './new-user';
import { SigUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private sigUpService: SigUpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: [
        '',
        [
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(30), 
          lowerCaseValidator
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
  }

  signup() {
    const newUser = this.form.getRawValue() as NewUser;
    this.sigUpService.signup(newUser).subscribe(
      () => this.router.navigate(['']),
      err => console.log(err)
    )
  }

}