import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private svc: AuthService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({

      name : this.fb.control('', [Validators.required ]),
      reservationTime: this.fb.control('', [Validators.required ]),
      people: this.fb.control('', [Validators.required ])

    });

  }


  onSubmit(): void {

    this.svc.book(this.form.value).subscribe((value:any) => {console.log(value);

    })

  }

}
