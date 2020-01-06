import { Injectable } from '@angular/core';
import { Product } from '../Entities/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data=[
    { id: 1, catID: 1, name: "klavye", picture: "1.jpg", price: 50,description:"klavye açıklamasıdır" },
    { id: 2, catID: 1, name: "mouse", picture: "2.jpg", price: 60 ,description:"mouse açıklamasıdır"},
    { id: 3, catID: 1, name: "yazıcı", picture: "3.jpg", price: 10 ,description:"yazıcı açıklamasıdır"}
  ];
  constructor() { }
  getAll() {
    return this.data;
  }
  getbyID(id) {
    return this.data.find(f=>f.id==id);
  }
}
