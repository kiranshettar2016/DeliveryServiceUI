import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Customer } from 'src/Model/customer';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

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
   getCustomers(): Observable<Customer> {
    return this.http.get<Customer>(this.apiURL + 'Customers')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(this.apiURL + 'Customers', customer)
    .subscribe(data => {
      console.log(data);
    }, () => {
      catchError(this.handleError);
    });
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // );
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
