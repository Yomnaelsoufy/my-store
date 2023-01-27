import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

/**
 * Product List Component that calls api and loads Product Components to page.
 */
export class ProductListComponent implements OnInit {
  Products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      for (let ind = 0; ind < res.length; ind++) {
        const product = res[ind];
        product['quantity'] = 1;
      }
      this.Products = res;
      this.productsService.setProducts(res);
    });
  }
  addToCart(Product: Product) {
    this.cartService.addToCart(Product);
  }
}
