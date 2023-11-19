import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { LoggedService } from './logged.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private logged: LoggedService) {
    let user = localStorage.getItem('user');
    if(user){
      this.saveUser(JSON.parse(user))
    } 
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body).pipe(
      catchError(this.handleError)
    );;
  }

  register(idnp: string, username: string, email: string, password: string): Observable<any> {
    const body = { idnp, username, email, password };
    const url = `${this.apiUrl}/register`;
    console.log(body, url)
    return this.http.post(url, body).pipe(
      catchError(this.handleError)
    );;
  }

  saveUser(user_data: any): void {
    this.logged.isLogged.next(true);

    this.logged.user.next(user_data);
    localStorage.setItem('user', JSON.stringify(user_data));
  }

  getUser() {
    return this.logged.user;
  }

  removeUser(): void {
    localStorage.removeItem('user');
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = 'An error occurred.';
   errorMessage = error;
    return throwError(() => new Error(errorMessage));
  }
  
}
