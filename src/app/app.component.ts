import { Component, OnInit } from '@angular/core';
import { LoginService } from './login-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
 
  signUpObj ={
    username: '',
    email: '',
    password: '',
  };

  loginObj: any = {
    userName: '',
    password: ''
  };

  AllObj: any={
    
  }

  user: any;
  isLoggedin: boolean = true;

  constructor(private formBuilder: FormBuilder,private service:LoginService){}
  ngOnInit(): void {

    this.getData();
    
  }


  onSIgnUp() {
    this.service.reg(this.signUpObj).subscribe((Response) => {
      console.log(Response);
    });
  }

 
  onLogin() {
    this.service.loginR(this.loginObj.email).subscribe((data) => {
      this.user = data;
      if (this.user.email === this.loginObj.email && this.user.password === this.loginObj.password) {
        this.isLoggedin = true;
        alert('login successfull');
      }
    });
  }

  getData(){
    this.service.getAll().subscribe((response) => {
      console.log(response);
      
      this.AllObj = response
      console.log(this.AllObj);
    }
    )
  }
}
