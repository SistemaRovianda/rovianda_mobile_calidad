import { HttpClient, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";

@Injectable({
  providedIn: "root",
})
export class LotsService {
  url: string;

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {
    this.url = `${endpoint}`;
  }

  getLots(): Observable<any> {
    return this.http.get<any>(`${this.url}/packaging/lot`);
  }
}
