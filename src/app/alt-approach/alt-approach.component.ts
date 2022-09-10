import { Component, OnInit, ViewChild } from '@angular/core';
import { AltApproachChildComponent } from './alt-approach-child/alt-approach-child.component';
import { MyObject } from './alt-approach-child/my-object';


@Component({
  selector: 'app-alt-approach',
  templateUrl: './alt-approach.component.html',
  styleUrls: ['./alt-approach.component.css']
})
export class AltApproachComponent implements OnInit {
  @ViewChild(AltApproachChildComponent) child?:AltApproachChildComponent;
  constructor() { }

  send(o:MyObject): void {
    this.dataFromChild=JSON.stringify(o);
  }

 
  dataFromChild?:string;
  ngOnInit(): void {
 
  }


  callChildMethod():void{
    this.child?.updateNotedDateInChild();

  }

}
