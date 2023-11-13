import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/app/service/counter.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {


  count: number=0;
  constructor(public  counterService: CounterService) {}

  ngOnInit(): void {
    this.count = this.counterService.getCount();
    this.counterService.countUpdated.subscribe((count: number) => {
      this.count = count;
  })
  }

}
