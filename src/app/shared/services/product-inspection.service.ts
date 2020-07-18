import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_ENDPOINT_PROVIDER } from "src/app/providers/tokens";
import { ProductInspection } from "../models/product-inspection.interface";

@Injectable({
  providedIn: "root",
})
export class ProductInspectionService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  newProductInspection(body: ProductInspection): Observable<any> {
    return this.http.post<string>(`${this.endpoint}/quality/inspection`, body);
  }
}
