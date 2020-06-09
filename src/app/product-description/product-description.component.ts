import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  private _productService: ProductService;

  constructor(ps: ProductService) {
    this._productService = ps;
  }
  ngOnInit() {
    this._productService
      .getAlbum(1)
      .subscribe(response => this.albumInfo = response);
  }

}
