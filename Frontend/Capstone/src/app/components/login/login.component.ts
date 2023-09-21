import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private svc: AuthService
  ) { }


  ngOnInit(): void {

    this.form = this.fb.group({

      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])

    });
  }

  onSubmit(): void {

    this.svc.login(this.form.value).subscribe((value: any) => {
      console.log(value);
      localStorage.setItem('accessToken', value.accessToken);

    })

  }


}
