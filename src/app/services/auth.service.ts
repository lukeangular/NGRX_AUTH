import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AuthResponseData } from '../models/authResponse.model';
import { environment } from "../environments/environment";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private _http: HttpClient
  ) { }


  // login service
  login(email: string, password: string): Observable<AuthResponseData> {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`
    // let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`
    return this._http.post<AuthResponseData>(url, { email, password, returnSecureToken: true })
  }


  // format user
  formatUser(data: AuthResponseData) {
    const expirationdate = new Date(new Date().getTime() + +data.expiresIn * 1000)
    const user = new User(data.email, data.idToken, data.localId, expirationdate);
    return user
  }

  //show valid error message
  getErrorMessage(message: string) {
    switch (message) {
      case 'EMAIL_NOT_FOUND':
        return 'Email Not Found'

      case 'INVALID_PASSWORD':
        return 'Invalid Password'

      case 'EMAIL_EXISTS':
        return 'Email Exists'

      default:
        return 'Unknown Error Occcur. Please try again'
    }
  }

  // set user in localStorage()
  setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user))
  }

  // get user form localStorage
  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData')
    if (userDataString) {
      return JSON.parse(userDataString)
    }
    return null
  }


  // remove local storage
  removeLocalStorage() {
    localStorage.removeItem('userData')
  }



  // sign up 
  signUp(email: string, password: string): Observable<AuthResponseData> {
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`
    // let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`
    return this._http.post<AuthResponseData>(url, { email, password, returnSecureToken: true })
  }

}
