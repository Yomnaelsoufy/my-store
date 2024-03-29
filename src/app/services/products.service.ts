import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  Product!: Product;

  ProductsList!: Product[];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }

  setProducts(ProductsList: Product[]) {
    this.ProductsList = ProductsList;
  }
}
