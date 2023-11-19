import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  public isLogged = new BehaviorSubject<boolean>(false);
  public user = new BehaviorSubject<string>('');

  constructor() { 
    let user = localStorage.getItem('user');
    if(user){
      this.isLogged.next(true);
      this.user.next(user);
    } 
  }
}
