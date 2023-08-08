import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:2020/api/registration'; 

  constructor(private http: HttpClient) {}

  reg(user:any): Observable<any> { 
    return this.http.post(this.apiUrl, user)
      .pipe(
        map(response => {
          // You can perform additional data processing here if needed
          return response;
        })
      );
  }
  loginR(email:any){
   var api=this.apiUrl+"/"+email
   return this.http.get(api)  

 
  }
}
