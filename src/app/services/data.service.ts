import {transition} from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //currentuser
currentUser="";

//current account number
currentAcno="";



  constructor() { 
    this.getDetails();
  }
//save daetails - to save data to the local storage
saveDetails(){
  if(this.userDetails){
  //DATABASE
  localStorage.setItem('Database',JSON.stringify(this.userDetails))
  }

  if(this.currentUser){
  //currentUser
  localStorage.setItem('currentUser',JSON.stringify(this.currentUser))
  }

  if(this.currentAcno){
  //currentAcno
  localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
  }

} 

getDetails(){
  if (localStorage.getItem('Database')) {
    this.userDetails = JSON.parse(localStorage.getItem('Database') || '');
  }
  if (localStorage.getItem('currentUser')) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
  }
  if (localStorage.getItem('currentAcno')) {
    this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '');
  }
}


  //data base
userDetails:any={
  1000:{acno:1000,username:"Amal",password:1000,balance:3000,transaction:[]},
  1001:{acno:1001,username:"Pranav",password:1001,balance:1000,transaction:[]},
  1002:{acno:1002,username:"Anujith",password:1002,balance:1000,transaction:[]},

}
  register(acno:any,username:any,password:any){
  let userDetails=this.userDetails;

  if(acno in userDetails){
    return false;
  }
  else{
    userDetails[acno]={
      acno,
      username,
      password,
      balance:0,
      transaction:[]

      
    }
    this.saveDetails();
    console.log(userDetails);
    
    return true
  }
}


login(acno:any,pswd:any){

  let userDetails=this.userDetails;
  if(acno in userDetails){
    if(pswd=userDetails[acno]['password']){
      this.currentUser=userDetails[acno]['username']
      this.currentAcno=acno;
      this.saveDetails();
      return true;
    }
    else{
      return false
    }

  }else{
    return false
  }
}

deposite(acno:any,pswd:any,amt:any){
var amount=parseInt(amt)
let userDetails = this.userDetails

if(acno in userDetails){
if(pswd==userDetails[acno]['password']){
  userDetails[acno]['balance']+=amount;
  userDetails[acno]['transaction'].push(
    {
      Type:"Credit",
      Amount:amount
    }
  )
  this.saveDetails();
  console.log(userDetails);
  
  return userDetails[acno]['balance']
}
else{
  alert('password mismatch')
  return false
}
}else{
  alert('invalid data')
  return false
}
}


withdraw(acno:any,pswd:any,amt:any){
var amount=parseInt(amt)
let userDetails=this.userDetails

if(acno in userDetails){
  if(pswd==userDetails[acno]['password']){
    if(userDetails[acno]['balance']>amount){
    userDetails[acno]['balance']-=amount;
    userDetails[acno]['transaction'].push(
      {
        Type:"Dedit",
        Amount:amount
      }
    )
    this.saveDetails();
    console.log(userDetails);
    return userDetails[acno]['balance']
  }else{
    alert('Tranasaction Failed')
  }
}
  else{
    alert('password mismatch')
    return false
  }
  }else{
    alert('invalid data')
    return false
}
}

getTransaction(acno:any){
  return this.userDetails[acno]['transaction']
}
}