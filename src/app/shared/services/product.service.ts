import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { Observable } from "rxjs";
import {
  ProductInterface,
  ProductPresentation,
  ProductRovianda,
} from "../models/product-inspection.interface";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url;

  constructor(private http: HttpClient) {
    this.url = `${environment.basePath}/products`;
  }

  getAllProductsPacking(): Observable<any> {
    return this.http.get<ProductInterface[]>(`${this.url}/PACKING`);
  }

  getAllProductsDried(): Observable<any> {
    return this.http.get<ProductInterface[]>(`${this.url}/DRIEF`);
  }

  getProductsRovianda(): Observable<ProductRovianda[]> {
    return this.http.get<ProductRovianda[]>(
      `${environment.basePath}/products-rovianda`
    );
  }

  getProductPresentations(productId:number):Observable<ProductPresentation[]>{
    return this.http.get<ProductPresentation[]>(`${this.url}-rovianda/catalog/${productId}`); 
  }
  
}
