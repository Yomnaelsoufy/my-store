import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  Product!: Product;
  quantity: any = 1;
  options: number[] = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productsService.getProducts().subscribe((res) => {
        this.Product = res.find((item) => item.id == params['id']) as Product;
        if (this.Product) {
          this.Product.quantity = 1;
        }
      });
    });
  }

  submitAddToCart(item: Product): void {
    item.quantity = this.quantity;
    this.cartService.addToCart(item);
    alert(
      `Added to your cart: ${this.Product.quantity} of ${this.Product.name}`
    );
    this.quantity = 1;
  }
}
