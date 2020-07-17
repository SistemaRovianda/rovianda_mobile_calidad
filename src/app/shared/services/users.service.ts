import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { UserRegistered, UsersCheckers } from "../models/user.interface";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getUsers(): Observable<UserRegistered[]> {
    // return this.http.get<User>(`${this.endpoint}/oven/users/${processId}`);
    return this.http.get<UserRegistered[]>(`${this.endpoint}/user`);
  }

  addUser(processId: string, users: UsersCheckers): Observable<string> {
    return this.http.post<string>(
      `${this.endpoint}/oven/users/${processId}`,
      users
    );
  }

  getUsersChecked(processId: string): Observable<UsersCheckers> {
    return this.http.get<UsersCheckers>(
      `${this.endpoint}/oven/users/${processId}`
    );
  }
}
