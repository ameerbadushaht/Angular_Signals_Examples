import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { Books } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Signal_tt';

  // count: WritableSignal<number> = signal(99);


  // ================== Signals


  // book: WritableSignal<Books> = signal({
  //   id: '1',
  //   title: 'A true Story',
  //   price: 300,
  // });

  // isEven :Signal<boolean>= computed(()=>{
  //   if(this.count()%2==0){
  //     return true

  //   }
  //   else{
  //     return false
  //   }

  // })

  // constructor(){
  //   effect(()=>{
  //     console.log("this effect ::",this.count())
  //   })
  // }

  // ngOnInit(): void {
  //   console.log('Signal', this.count());
  // }

  // updateCount(){
  //   this.count.update((m)=>m+1);

  // }


//================== Computed===========

count: WritableSignal<number> = signal(99);

isOdd :Signal<string>=computed(()=>{
  if(this.count()%2==0){
    console.log("computed even")
    return "Even"
  }
  else{
    console.log("computed odd")
    return "Odd"
  }
})

updateCount():void{
  this.count.update(m=>m+1)
}


}
