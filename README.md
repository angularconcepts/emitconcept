# Emit Concept
This code is related to this question https://stackoverflow.com/questions/73579453/child-to-parent-communication-without-emitting
It tries to better understand the emit concept of data from child component to parent component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/emitconcept/`. The application will automatically reload if you change any of the source files.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

##What is the concept?

There are two approaches shown here for child component to parent component communication.  

###Standard approach:
Standard approach: For want of a better name called it the standard Approach. Its whats is commonly used.
src\app\std-approach\std-approach-child\std-approach-child.component.ts - It uses : 
-  @Output() myObjectEvent = new EventEmitter<MyObject>(); and  
- this.myObjectEvent.emit(o);  

src\app\std-approach\std-approach.component.html - it uses  
- <app-std-approach-child (myObjectEvent)="onMyObjectEvent($event)"></app-std-approach-child>

src\app\std-approach\std-approach.component.ts - it implements below to capture the emitted event   
- onMyObjectEvent(jsonStringEvent:string)

###Alternate approach:
Alternate approach: 
src\app\alt-approach\alt-approach-child\alt-approach-child.component.ts. In this event emitting is not used.
Instead Parent Component's method is directly invoked from child.

It may not be as cool looking as say having (myObjectEvent)="onMyObjectEvent($event)" inside <app-std-approach-child/>

But is it also works.

###How do the two approaches compare
Why do we not see anyone using the alternate approach?

Using @Output and Emitters as shown above demonstrates how you can create custom events and represent them in the custom components elements with the same simplicity of say a click event. These events can be raised by the child component and declared and used by the parent component with the same elegance of say a click event and handled in same manner. It also renders some degree of loose coupling. It truly componentises the child components. Thus its possible to create a library of the child components declaratively declare their usage and specify the events.   

But that is not the only way a child component can communicate with its parent component. It's also possible especially if reuse of the child component is not needed across different parents to just inject the parent class into the child class and invoke parent class method from the child component. That is also an effective way of sharing data from child to parent and can be considered.  

However both the approaches are effectively the same. Event emitting is almost the same as the direct method invocation discussed here with the additional advantage of declaratively describing its usage and facilitating reuse. Data is passed in same manner by refernce for objects and by copy for primitives in both the cases. Both approaches can be debugged similarly and easily using breakpoints if needed. 

This data passing by reference is demonsrated here in the standard approach. 
This is the emitting code.   

let o:MyObject={"a":"a"};  
this.myObjectEvent.emit(o);  
setTimeout(()=> { o.a="b";  }, 10000);  

A little after the data is emitted the same data updated by reference has its change visible on screen.

This is the event handling code.   
 onMyObjectEvent(o:MyObject)  
 {  
    this.dataFromChild=JSON.stringify(o);  
    setTimeout(()=> { this.dataFromChild=JSON.stringify(o)+"[changed]";  }, 15000);  
 }  

In Direct Method invocation, of course data is always passed by reference for objects and by copy for primitives (No need to demonstrate it).  
 Just the same as it has been seen for emit.  
 
 Source code can be found at: [https://github.com/angularconcepts/emitconcept.git](https://github.com/angularconcepts/emitconcept.git)  
 Stack Blitz url:  [https://stackblitz.com/github/angularconcepts/emitconcept](https://stackblitz.com/github/angularconcepts/emitconcept)