import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/api/products/product.service';
import { ProductRepresentation } from '../Service/api/models/product-representation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products : ProductRepresentation[] = [];

  constructor(
    private service: ProductService
  ) { }

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe((res) => {
      this.products = res;
    });
  }

}
