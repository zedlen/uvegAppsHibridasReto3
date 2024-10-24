import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 } from 'uuid';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: Array<User> = [];
  private isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged) {
      this.isLogged.next(true);
    }
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email == email && u.password == password
    );
    if (!user) return false;
    localStorage.setItem('isLogged', JSON.stringify(user));
    this.setIsLogged(true);
    return true;
  }

  logOut(): void {
    localStorage.clear();
    this.setIsLogged(false);
  }

  signIn(name: string, email: string, password: string): void {
    const newUser: User = {
      name,
      email,
      password,
      id: v4(),
    };
    this.users.push(newUser);
    localStorage.setItem('isLogged', JSON.stringify(newUser));
    this.setIsLogged(true);
  }

  public getIsLogged(): Observable<boolean> {
    return this.isLogged.asObservable();
  }

  public setIsLogged(value: boolean): void {
    this.isLogged.next(value);
  }
}
