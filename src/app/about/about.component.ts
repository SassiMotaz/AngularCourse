import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Service/api/products/product.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // constructor(
  //   private activatedRoute: ActivatedRoute
  // ) { }
  // ngOnInit(): void {
  //   this.param = this.activatedRoute.snapshot.params['username'];
  //   this.queryParam = this.activatedRoute.snapshot.queryParams['course'];
  // }
  // param: any;
  // queryParam: any;

  constructor(
    private service: ProductService
  ) { }

  // ngOnInit(): void {
  //   this.service.getAllProductsWithLimit().subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  ngOnInit(): void {
    const product = {
      title: 'test',
      price: 100,
      description: 'test',
      category: 'test',
      image: 'test'
    }
    this.service.CreateProduct(product).subscribe((res) => {
      console.log(res);
    },
    (err: HttpErrorResponse) => {
        if (err instanceof ErrorEvent) {
          console.log('Client-side error occurred.');
        }else {
          console.log('Server-side error occurred.');
        }
    });
  }
}
