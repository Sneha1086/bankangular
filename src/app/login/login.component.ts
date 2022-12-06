import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{//(3rd execute)
//class- collection of properties and functions
//properties/variebles

aim="Your perfect banking partner";

account="Enter your account here";

acno='';
pswd='';
// ds: any;
// fb: any;



//functions/methods - user defined functions //(4th execute)
//dependency injection
  constructor(private fb:FormBuilder,private ds:DataService,private router:Router){ //(1st execute)
    //it automatically invokes when the object is created
    //object initialization
  }

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  ngOnInit(): void {//(2nd execute)
    //its a life cycle hooks of angular
    //when the component is created at same time it will initialize or authorized
  }

  acnoChange(event:any)
  {
    console.log(event);
    this.acno=event.target.value;
    console.log(this.acno);
    

  }
  pswdChange(event:any){
    this.pswd=event.target.value;
    console.log(this.pswd);
    
  }
  login(){
    // alert('login clicked');
    var acno=this.loginForm.value.acno;
    var pswd=this.loginForm.value.pswd;
    var userDetails=this.ds.userDetails;
    if(this.loginForm.valid){

    const result=this.ds.login(acno,pswd);
    if(result){
      alert('login successful');
       this.router.navigateByUrl('dashboard')
    }
    else
    {
      alert('login failed')
    }
  }
  else{
      alert('invalid form')
    }
  }
}





  // login(a:any,p:any){
  //   // alert('login clicked');
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userDetails=this.userDetails;

  //   if(acno in userDetails){
  //     if(pswd==userDetails[acno]['password']){
  //       alert('login successful');

  //     }
  //     else{
  //       alert('invalid password');
  //     }

  //   }
  //   else{
  //     alert('invalid user details');
  //   }
  // }

