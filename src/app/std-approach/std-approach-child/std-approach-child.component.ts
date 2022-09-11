import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { MyObject } from './my-object';

@Component({
  selector: 'app-std-approach-child',
  templateUrl: './std-approach-child.component.html',
  styleUrls: ['./std-approach-child.component.css']
})
export class StdApproachChildComponent implements OnInit {

  constructor() { }

  d?: Date ;
  @Output() myObjectEvent = new EventEmitter<MyObject>();

  ngOnInit(): void {
  }
 
  updateNotedDateInChild()
  {
    this.d= new Date();
  }

  emitDataToParent()
  {
	let o:MyObject={"a":"a"};
    this.myObjectEvent.emit(o);
    setTimeout(()=> { o.a="b-changed";  }, 5000);
    
  }

}
