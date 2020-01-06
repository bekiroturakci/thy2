import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCommentService {
  data=[
    { id: 1, productID: 1, comment: "ürün iyidir" },
    { id: 2, productID: 1, comment: "ürün ucuzdur" },
    { id: 3, productID: 2, comment: "kargo çok kötü" },
    { id: 4, productID: 3, comment: "bozuk geldi" },
    { id: 5, productID: 3, comment: "geç geldi..." },
  ];
  constructor() { }
  getAll(ProductID) {
    return this.data.filter(f=>f.productID==ProductID);
  }
}
