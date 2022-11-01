import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // login function
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>('/api/login', { email, password });
  }
}
