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
  getProduct(id){ // Chi tiet san pham
      return this.products.find(product => product.id == id);
  }
  removeProduct(id){ // Xoa san pham
    return this.products.filter(product => product.id != id)
  }
  updateProduct(product){
    return this.products.map( item => item.id === product.id ? product : item);
  }
  addProduct(product){ // them san pham
    let newObj = { id: 6, ...product};
    this.products.push(product)
  }
  editProduct(){ // sua san pham

  }
}