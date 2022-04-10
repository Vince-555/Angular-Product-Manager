import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';

const baseUrl : string = "http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public headers = new HttpHeaders({
    "Content-Type": "application/json"
  });


  get() {
    let headers = new HttpHeaders({'Content-Type': 'application/json'})
    // const options = {withCredentials: true, 'access-control-allow-origin': "http://localhost:3000/", 'Content-Type': 'application/json'
    return this.http.get('http://localhost:3000/listings', {headers:headers});
  }

  getProduct() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      // 'access-control-allow-origin': 'http://localhost:3000/'
    })
    // const options = {withCredentials: true, 'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json'}
    return this.http.get('http://localhost:3000/auth/product');
  }



  post(data: any)  : Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log("servicezzz post",data);
    return this.http.post<any>(`${baseUrl}auth/login` , data)
    .pipe(
      tap(data => console.log('login ' , JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  register(data: any)  : Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log("servicezzz post",data);
    return this.http.post<any>(`${baseUrl}auth/register` , data)
    .pipe(
      tap(data => console.log('login ' , JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
