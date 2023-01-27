import { Component, Input, OnInit } from '@angular/core';
import { personalInfo } from 'src/app/models/personalInfo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  personalInfo!: personalInfo;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.personalInfo = this.cartService.getpersonalInfo();
  }

  ngOnDestroy(): void {
    this.cartService.setpersonalInfo(new personalInfo());
  }
}
