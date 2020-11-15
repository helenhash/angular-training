import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '@app/login/model/user';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {UserResponse} from "@app/login/model/user-response";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    console.log(localStorage.getItem('currentUser'));
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this.http.post<UserResponse>('/api/spring-rest/login', formData)
      .pipe(map(userResponse => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(userResponse.data));
        this.currentUserSubject.next(userResponse.data);
        return userResponse.data;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
