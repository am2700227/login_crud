import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:2020/api/registration';

  constructor(private http: HttpClient) {}

  reg(user: any) {
    return this.http.post(this.apiUrl, user);
  }


  loginR(email: string) {
    const api = this.apiUrl + '/' + email;
    return this.http.get(api);
  }

  getAll(){
    return this.http.get("http://localhost:2020/api/getAll");
    }
}
