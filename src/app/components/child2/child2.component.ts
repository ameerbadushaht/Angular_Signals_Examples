import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {



  constructor(public  counterService: CounterService) {}



  increaseCount(): void {
    this.counterService.increaseCount();
  }

  // with signals

  setCount(){
    this.counterService.setCount()

  }
}
