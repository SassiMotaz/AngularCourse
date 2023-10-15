import { Component } from '@angular/core';
import { ProductRepresentation } from '../Service/api/models/product-representation';
import { ProductService } from '../Service/api/products/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {

 product: ProductRepresentation = {};

 constructor(
  private service : ProductService ,
  private router: Router
 ) { }


 saveProduct() {
  this.service.CreateProduct(this.product).subscribe(
   (data) => {
    this.router.navigate(['/products']);
   } 
  );
  }
}
