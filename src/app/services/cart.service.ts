import { Injectable } from '@angular/core';
import { personalInfo } from '../models/personalInfo';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];
  personalInfo!: personalInfo;

  constructor() {}
  addToCart(Product: Product) {
    const cartProduct = this.cartItems.find((item) => item.id == Product.id);
    if (cartProduct?.quantity && Product?.quantity) {
      cartProduct.quantity += Product.quantity;
    } else {
      this.cartItems.push(Product);
    }
  }

  getCart(): Product[] {
    return this.cartItems;
  }

  setCart(cartItems: Product[]) {
    this.cartItems = cartItems;
  }

  clearCart(): Product[] {
    this.cartItems = [];
    return this.cartItems;
  }

  setpersonalInfo(personalInfo: personalInfo): void {
    this.personalInfo = personalInfo;
  }

  getpersonalInfo(): personalInfo {
    return this.personalInfo;
  }
}
