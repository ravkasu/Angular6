import { Injectable } from '@angular/core';
// import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  end:any;
  url = 'https://jsonmock.hackerrank.com/api/football_competitions';
  // url='./json/football.json';

  constructor(
    // private http: Http,
    private http: HttpClient
    ) { }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  // getfootballjson() {
  //   return this.http.get(this.url).pipe(
  //         map(this.extractData)
  //       );
  // }
  getfootball(): Observable<any> {
    return this.http.get(this.url).pipe(
      map(this.extractData)
    );
  }
  getfootballopt(options): Observable<any> {
    return this.http.get(this.url,options).pipe(
      map(this.extractData)
    );
  }

  getmoviedata(year): Observable<any> {
    return this.http.get("https://jsonmock.hackerrank.com/api/movies?year="+year).pipe(
      map(this.extractData)
    );
  }
  // getcustomerdata(): Observable<any> {
  //   return this.http.get("https://jsonmock.hackerrank.com/api/customers").pipe(
  //     map(this.extractData)
  //   );
  // }
}