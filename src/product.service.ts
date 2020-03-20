import { Injectable } from '@angular/core';
import { data } from '../MockData';
import { Product } from '../Product';

@Injectable()
export class ProductService {
  products = data;

  constructor() { }
  getProducts(){ // Lay danh sach san pham
      return this.products;
  }
  getProduct(){ // Chi tiet san pham

  }
  removeProduct(id){ // Xoa san pham
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(){ // them san pham
  let newObj = {id: 6, ...Product};
  this.products.push(product)

  }
  editProduct(){ // sua san pham

  }
}