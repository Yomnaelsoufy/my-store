import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
/**
 * Product component, loaded from the Product List Component on the main page.
 */
export class ProductItemComponent {
  quantity: any = 1;
  options: number[] = [1, 2, 3, 4, 5];

  @Input() Product!: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  constructor() {}
  submitAddToCart(item: Product): void {
    item.quantity = this.quantity;
    this.addToCart.emit(item);
    alert(
      `Added to your cart: ${this.Product.quantity} of ${this.Product.name}`
    );
    this.quantity = 1;
  }
}
