import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input()item:string|undefined;
//  @Input() is used to hold data from the parent component

@Output() onCancel = new EventEmitter();
  constructor(){ }
  ngOnInit(): void {
    
  }cancel(){
    this.onCancel.emit();
  }

}
