import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registration_form= new FormGroup({

    name : new FormControl("",[Validators.required]),
    password : new FormControl("",[Validators.required,Validators.minLength(4)]),
    email : new FormControl("",[Validators.required,Validators.email])
  });

  constructor(private formBuilder: FormBuilder,private service:LoginService) {}
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    // Initialize the form with data from local storage
    const name = localStorage.getItem('name') || '';
    const email = localStorage.getItem('email') || '';
    const password = localStorage.getItem('password') || '';

   
    }
    onSubmit() {
      if (this.registration_form.valid) {
        // Save the form data to local storage
        console.log(this.registration_form)
        const user={
          name:this.registration_form.value.name,
          email:this.registration_form.value.email,
          password:this.registration_form.value.password
        }
           this.service.reg(user).subscribe((Response)=>{
            console.log(Response)
           });
        localStorage.setItem('name', JSON.stringify(this.registration_form.value.name));
        localStorage.setItem('email', JSON.stringify(this.registration_form.value.email));
  
        // You can also perform other actions with the form data
        // e.g., send it to a backend server.
      }
  }



}
