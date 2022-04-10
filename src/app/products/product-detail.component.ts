import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  // product: Product | undefined;

  product : any = [ ];
  tag : any = [ ];
  token: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
      this.gettag(id);
    }
  }

  getProduct(id: number): void {

    this.productService.getProduct(id).subscribe({
      next: product =>{
        this.product = product;
        console.log("this is data", this.product)

      },
      error: err => this.errorMessage = err
    });
  }

  gettag(id: number): void {

    this.productService.gettag(id).subscribe({
      next: x =>{
        this.tag = x;
        console.log("this is tag", this.tag)

      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
