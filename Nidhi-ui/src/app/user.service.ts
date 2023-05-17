import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { User } from 'src/model/user';
import { Binary } from '@angular/compiler';

const API_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }



  getAdminBoard(): Observable<[]> {

    return this.http.get<[]>(API_URL + 'api/user/admin', { responseType: 'json' })
      .pipe(
        tap(data =>
          console.log('all registered users' + data))
      );  
  }

  getLandDetails(){

    return this.http.get<[]>(API_URL + 'getLandDetails', { responseType: 'json' })
      .pipe(
        tap(data =>
          console.log(' land details' + data))
     );  
  }

  saveLandDetails(data : any): Observable<any> {
    return this.http.post(API_URL + "saveDetails", data);
  }


  updateLandDetails(data : any): Observable<any> {
    return this.http.put(API_URL + "update", data);
  }


  // upload(input: FormData , data: any): Observable<any>{
  //   return this.http.put<any>(API_URL + "upload", input);
  // }


 
}