import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://fakestoreapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsWithLimit(limit: number = 5) {
    const productsUrl : string = `${this.baseUrl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  CreateProduct(product: ProductRepresentation) {
    const productsUrl : string = `${this.baseUrl}productsDD`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
} 
