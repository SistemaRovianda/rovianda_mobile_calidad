import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DryingService {
  url;

  constructor(private http: HttpClient) {
    this.url = `${environment.basePath}`;
  }

  newDrying(body: DryingInterface): Observable<any> {
    return this.http.post<any>(`${this.url}/drying`, body);
  }
}
