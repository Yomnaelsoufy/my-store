export class Product {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.url = '';
    this.description = '';
    this.quantity = 0;
  }
}
