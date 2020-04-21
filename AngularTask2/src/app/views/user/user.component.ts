import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
 
})
export class UserComponent implements OnInit {

  constructor() { }
  @Input() status:any;
  @Input() user:any;
  flag :any;
  @Output() evntId=new EventEmitter<number>();
  @Output() statusUpdateEmit=new EventEmitter<number>();
  ngOnInit(): void {
  }
   showDetails(id : number): void {
     this.evntId.emit(id);
   }
   upDateStatus():void{
     this.statusUpdateEmit.emit(this.user.id);
   }
}
