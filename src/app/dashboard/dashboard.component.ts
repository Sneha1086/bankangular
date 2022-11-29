import { Component,OnInit } from '@angular/core';
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
  amount="";
  acno1='';
  pswd1='';
  amount1='';

  user=''
  constructor( private ds:DataService ){
    this.user=this.ds.currentUser
  }

  

  ngOnInit(): void{

  
  }
  deposite(){
    var acno=this.acno;
    var pswd=this.pswd;
    var amount=this.amount;
    // alert('clicked')
  
  
    const result=this.ds.deposite(acno,pswd,amount)
    if(result){
      alert(`${amount} is credited....available balance is ${result}`)
    }
  }
  withdraw(){
    var acno=this.acno1;
  var pswd=this.pswd1;
  var amount=this.amount1;
  // alert('clicked')


  const result=this.ds.withdraw(acno,pswd,amount)
  if(result){
    alert(`${amount} is debited....available balance is ${result}`)
  }
 }
  }


  


