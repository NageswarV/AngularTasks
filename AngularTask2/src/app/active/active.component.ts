import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  status ='active';
  constructor() { }
  
  ngOnInit(): void {
  }

}
