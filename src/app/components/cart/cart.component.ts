import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { personalInfo } from 'src/app/models/personalInfo';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() productsInCart: Product[] = [];

  name!: string;
  address!: string;
  ccNum!: string;
  totalPrice: number = 0;
  personalInfo!: personalInfo;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getCart();

    for (let ind = 0; ind < this.productsInCart.length; ind++) {
      let quantity = this.productsInCart[ind].quantity;
      if (!quantity) {
        quantity = 1;
      }
      this.totalPrice += this.productsInCart[ind].price * quantity;
    }
  }

  updateCart(cartItem: Product) {
    if (cartItem.quantity == 0) {
      this.removeFromCart(cartItem);
    }

    this.totalPrice = 0;
    for (let ind = 0; ind < this.productsInCart.length; ind++) {
      let quantity = this.productsInCart[ind].quantity;
      if (!quantity) {
        quantity = 1;
      }
      this.totalPrice += this.productsInCart[ind].price * quantity;
    }
  }

  removeFromCart(cartItem: Product) {
    this.productsInCart = this.productsInCart.filter(
      (item) => item.id != cartItem.id
    );
    this.cartService.setCart(this.productsInCart);
    alert(`${cartItem.name} has been removed from your cart.`);
  }

  onSubmit() {
    const personalInfo: personalInfo = {
      name: this.name,
      totalPrice: this.totalPrice,
      ccNum: this.ccNum,
    };

    this.cartService.setpersonalInfo(personalInfo);
    this.router.navigate(['/confirmation']);

    this.productsInCart = this.cartService.clearCart();
    this.name = '';
    this.address = '';
    this.ccNum = '';
    this.totalPrice = 0;
  }
}
