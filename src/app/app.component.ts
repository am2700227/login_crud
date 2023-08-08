import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login-service.service';
import { Router } from '@angular/router';





@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  

  form!: FormGroup;
  title = 'login_cred';

  signUpUsers: any[]=[];
  signUpObj: any = {
    username: '',
    email: '',
    password: ''
  };
  loginObj: any ={
    userName: '',
    password: ''

  }
  constructor(private formBuilder: FormBuilder,private service:LoginService,private router:Router){}
  ngOnInit(): void {

    const localData = localStorage.getItem('signUpUsers')
    if(localData != null){
      this.signUpUsers = JSON.parse(localData);
    }
  }
  onSIgnUp(){
    this.signUpUsers.push(this.signUpObj)
    console.log(this.signUpObj)
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers))
    this.service.reg(this.signUpObj).subscribe((Response) => {
      console.log(Response);
    });
      }
      user:any
      isLoggedin:boolean=true
  onLogin(){
    // console.log(this.loginObj);
    this.service.loginR(this.loginObj.email).subscribe((data)=>{
      this.user=data
      console.log(this.user);    
       if((this.user.email)===(this.loginObj.email) && (this.user.password)===(this.loginObj.password)){
        this.isLoggedin=false
        alert("login successfull")
        
       }
       console.log(this.isLoggedin)   
    })
   
  }
  
}
