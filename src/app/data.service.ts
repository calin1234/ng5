import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['My first goal', 'My last goal']);
  goal = this.goals.asObservable();

  constructor() {
  }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}