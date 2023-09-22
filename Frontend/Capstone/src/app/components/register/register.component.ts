import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private svc: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {

    this.form = this.fb.group({

        name : this.fb.control('', [Validators.required ]),
        username : this.fb.control('', [Validators.required]),
        email: this.fb.control('',[Validators.required, Validators.email]),
        password: this.fb.control('',[Validators.required])

    });
  }

  onSubmit(): void {

    this.svc.register(this.form.value).subscribe((value: any) => {
      console.log(value);
    });
    this.router.navigate(['/login']);

  }

}
