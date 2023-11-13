import { EventEmitter, Injectable, signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  // without Signal
   count = 0;
   countUpdated: EventEmitter<number> = new EventEmitter<number>();
  getCount(): number {
    console.log(" Get Count ::",this.count)
    return this.count;

  }

  increaseCount(): void {
    this.count++;
    this.countUpdated.emit(this.count);
    console.log("Increase Count::",this.count)
  }
  // with signals

  a=0
  counter= signal({
    count:this.a
  })

  setCount(){
   this.a=this.a+1;
  this.counter.set({
    count:this.a
  })
  }
}
