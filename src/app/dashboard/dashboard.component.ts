import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno='';
  pswd='';
  amount='';
  //withdraw properties
  acno1='';
  pswd1='';
  amount1='';

  user=''
  sdate: Date;
  // pswd: any;
  // amount: any;
  // acno: any;
  // constructor(private ds:DataService)
  constructor( private fb:FormBuilder,private ds:DataService,private router:Router ){
    // constructor(private fb:FormBuilder,private ds:DataService)
    this.user=this.ds.currentUser;
    this.sdate=new Date();
  }

  DepositeForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  ngOnInit(): void{
    if (!localStorage.getItem('currentAcno')){
      alert('please login first')
      this.router.navigateByUrl('');
    }
  }
  deposite(){

    console.log(this.DepositeForm);

    console.log(this.DepositeForm.get('acno')?.errors);
    
    
    // var acno=this.acno;
    // var pswd=this.pswd;
    // var amount=this.amount;
    var acno=this.DepositeForm.value.acno;
    var pswd=this.DepositeForm.value.pswd;
    var amount=this.DepositeForm.value.amount;
    // alert('clicked')
    if(this.DepositeForm.valid){
  
  
    const result=this.ds.deposite(acno,pswd,amount)
    if(result){
      alert(`${amount} is credited....available balance is ${result}`)
    }
  }
  else{
    alert('invalid form')
  }
}


  withdraw(){

    console.log(this.withdrawForm);

    console.log(this.withdrawForm.get('acno1')?.errors);

    var acno=this.withdrawForm.value.acno1;
    var pswd=this.withdrawForm.value.pswd1;
    var amount=this.withdrawForm.value.amount1;

    if(this.withdrawForm.valid){
  // alert('clicked')


  const result=this.ds.withdraw(acno,pswd,amount)
  if(result){
    alert(`${amount} is debited....available balance is ${result}`)
  }
 }
 else{
  alert('invalid form')
 }
}
logout(){

  // remove currentAcno and currentusername 
  localStorage.removeItem('currentAcno');
  localStorage.removeItem('currentUser');
  this.router.navigateByUrl('')

 }
 delete(){
  // alert('clicked')
  this.acno=JSON.parse(localStorage.getItem('currentAcno') || ' ');
 }
 onCancel(){
  this.acno="";
 }
}


