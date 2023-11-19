import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = 'http://localhost:3000/post';

  constructor(private http: HttpClient,) { }

  addPost(author:string, title: string, text: string): Observable<any> {
    //const token = localStorage.getItem(this.tokenKey);
    const body = { author, title, text };

    return this.http.post(`${this.apiUrl}`, body).pipe(
      catchError(this.handleError)
    );
  }

  getAllPosts(): Observable<any> {
   
    return this.http.get<any>(`${this.apiUrl}/all`).pipe(
      catchError(this.handleError)
    );
  }

  deleteBookmark(post_id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/post/${post_id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    return throwError(() => new Error('An error occurred.'));
  }
}
