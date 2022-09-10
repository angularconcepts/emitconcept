import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

import { AltApproachComponent } from '../alt-approach.component';
import { MyObject } from './my-object';


@Component({
  selector: 'app-alt-approach-child',
  templateUrl: './alt-approach-child.component.html',
  styleUrls: ['./alt-approach-child.component.css']
})
export class AltApproachChildComponent implements OnInit {

  constructor(private altApproachCallback: AltApproachComponent) { }

  

  d?: Date ;
  


  ngOnInit(): void {
  }
 
  updateNotedDateInChild()
  {
    this.d= new Date();
  }

  directDataToParent()
  {
   let o:MyObject={"a":"a"};
   this.altApproachCallback.send(o);
  }

}
