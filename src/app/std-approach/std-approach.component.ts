import { Component, OnInit, ViewChild } from '@angular/core';
import { StdApproachChildComponent } from './std-approach-child/std-approach-child.component';
import { MyObject } from './std-approach-child/my-object';
@Component({
  selector: 'app-std-approach',
  templateUrl: './std-approach.component.html',
  styleUrls: ['./std-approach.component.css']
})
export class StdApproachComponent implements OnInit {
  @ViewChild(StdApproachChildComponent) child?:StdApproachChildComponent;
  constructor() { }
  dataFromChild?:string;
  ngOnInit(): void {
  }

  onMyObjectEvent(o:MyObject)
  {
    this.dataFromChild=JSON.stringify(o);
    setTimeout(()=> { this.dataFromChild=JSON.stringify(o)+"[changed]";  }, 15000);
  }

  callChildMethod():void{
    this.child?.updateNotedDateInChild();

  }

}
