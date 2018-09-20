import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=282980775.177e61e.4321729c68dc4a11a41c7981fc51db6c';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getPictures(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

}
