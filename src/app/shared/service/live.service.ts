import { Live } from 'src/app/shared/model/live.model';
import { ResponsePageable } from './../model/responsePageable.model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = 'http://localhost:8080/live';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getLiveWithFlag(flag: string): Observable<ResponsePageable> {
    return this.http.get<ResponsePageable>(`${this.apiUrl}?flag=${flag}`);
  }

  postLive(live: any): Observable<Live> {
    return this.http.post<any>(`${this.apiUrl}`, live, this.httpOptions);
  }

}
