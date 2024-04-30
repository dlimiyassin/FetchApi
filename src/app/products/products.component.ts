import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(private service : ProductsService){}
  ngOnInit(){
    this.getProducts();
  } 
  products : any;
  getProducts(){
    this.service.getAllProducts().subscribe({
      next: (data) => { 
        console.log(data);
        this.products = data
        }
    });
  }
}
