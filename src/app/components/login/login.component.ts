import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form!: FormGroup


  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      user_name:['', Validators.required ],
      password:['', Validators.required ]

  });
  }
   submit(){
    // console.log(this.form.getRawValue());

    const formData = this.form.getRawValue();

    const data = {
      user_name: formData.user_name,
      password: formData.password,
      id: 6,
      access_token: 'WRVOyaZVkkCX7kleTN6ZcEahYQtsR8qit9TfmQ0g'
    };

    this.http.post('url: http://192.168.100.8:8000/api/login', data).subscribe(
     result => {
        console.log('success');
        console.log(result);
      },
       error => {
      console.log('ERROR');
      console.log(error);
      }
    );

   }

}
