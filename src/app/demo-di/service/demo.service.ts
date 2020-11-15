import {Injectable} from '@angular/core';
import {from, interval, Observable, of} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getProductName() {
    return 'Macbook';
  }

  // The Promise object represents
  // the eventual completion (or failure) of an asynchronous operation, and its resulting value.
  demoPromise() {
    let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve('I promise to return this after 1 second!');
      }, 2000);
    });
    promise.then(function(value) {
      console.log(value);
    });
  }

  //RXJs
  firstRxJs() {
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });
    console.log('just before subscribe');
    observable.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
  }

  // compare to function
  // function foo() {
  //   console.log('Hello');
  //   return 42;
  //   return 100; // dead code. will never happen
  // }
  demoRxJsReturnMoreValue(){
    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100); // "return" another value
      subscriber.next(200); // "return" yet another
    });
    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
  }

  // "return" values asynchronously
  demoAsynchronously() {
    const foo = new Observable(subscriber => {
      console.log('Hello');
      subscriber.next(42);
      subscriber.next(100);
      subscriber.next(200);
      setTimeout(() => {
        subscriber.next(300); // happens asynchronously
      }, 1000);
    });

    console.log('before');
    foo.subscribe(x => {
      console.log(x);
    });
    console.log('after');
  }

  // ---------------DEMO CREATION OP -----------
  observer = {
    next: (val) => console.log(val),
    error: (err) => console.log(err),
    complete: () => console.log('complete'),
  };

  /**
   * demo (of) Creation opperator
   */
  demoOf() {

    of([1, 2, 3]).subscribe(this.observer);
  }

  /**
   * cũng được sử dụng để tạo Observable từ 1 giá trị.
   * Tuy nhiên, điểm khác biệt đối với of() là from() chỉ nhận vào giá trị là một Iterable hoặc là một Promise
   */
  demoFrom() {
    // output: 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'
    // complete: 'complete'
    from('hello world').subscribe(this.observer);
  }

  /**
   * interval() là hàm để tạo Observable mà sẽ emit giá trị số nguyên từ số 0 theo 1 chu kỳ nhất định.
   */
  demoInteval(){
    interval(1000) // emit giá trị sau mỗi giây
      .subscribe(this.observer);
  }

  // -------------------Transformation Operators ------------------------
  demoPipe() {
    interface User {
      id: string;
      username: string;
      firstname: string;
      lastname: string;
    }

    const source = new Observable<User>((observer) => {
      const users = [
        {id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662', username: 'tiepphan', firstname: 'tiep', lastname: 'phan'},
        {id: '34784716-019b-4868-86cd-02287e49c2d3', username: 'nartc', firstname: 'chau', lastname: 'tran'},
      ];

      setTimeout(() => {
        observer.next(users[0]);
      }, 1000);
      setTimeout(() => {
        observer.next(users[1]);
        observer.complete();
      }, 3000);
    });

    source.pipe(
      map(user => {
        return {
          ...user,
          fullname: `${user.firstname} ${user.lastname}`
        };
      })
    ).subscribe(this.observer);
  }

  // RxJS Filtering Operators

  private filterDemo(){
    from([1, 2, 3, 4, 5, 6])
      .pipe(
        filter((x) => x % 2 === 0) // số chẵn
      )
      .subscribe(console.log); // output: 2, 4, 6
  }


}
