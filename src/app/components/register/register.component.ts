import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userForm! : FormGroup;
     constructor(private fb:FormBuilder, private api:UserService,private router:Router) {}


ngOnInit(): void {
  this.userForm = this.fb.group({
    name_therapist:['', Validators.required ],
    app_therapist:['', Validators.required ],
    apm_therapist:['', Validators.required ],
    specialty:['', Validators.required ],
    user_name:['', Validators.required ],
    phone:['', Validators.required ],
    password:['', Validators.required ],
    professional_license:['', Validators.required ]
})
}

onCreateUser(){
if(this.userForm.valid){
this.api.createUsers(this.userForm.value)
.subscribe({
next:(res=>{
Swal.fire({
  position :'top-end',
  icon: 'success',
  title: 'Arantza te quiere',
  showConfirmButton:false,
  timer:1500
})
this.userForm.reset();
this.router.navigate(['dashboard']);
}),
error: (err) => {
  Swal.fire({
    position :'top-end',
    icon: 'error',
    title: 'Arantza no te quiere',
    timer:1500
    })}
})
}else{
  this.validateAll(this.userForm);
  console.log("No valido");
}
}
private validateAll(formGroup:FormGroup){
  Object.keys(formGroup.controls).forEach(field=>{
    const control = formGroup.get(field);
    if(control instanceof FormControl){
      control?.markAsDirty({onlySelf:true})
    }else if(control instanceof FormGroup){
      this.validateAll(control)
    }
  })
}

}
