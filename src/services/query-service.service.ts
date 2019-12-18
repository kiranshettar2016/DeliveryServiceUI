import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  // Define API
  apiURL = 'http://localhost:58890/api/';
  // TODO add the common section to base service and consume base url from Env
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

   // HttpClient API get() method => Fetch customer list
   getTotalDeliveryFare(distance: number, floor: number): Observable<number> {
    return this.http.get<number>(this.apiURL +  'Queries/getTotalFare/distance/' + distance + '/floor/' + floor)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if (error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
