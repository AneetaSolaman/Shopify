import { Component, OnInit } from '@angular/core';
import { ShopifyService } from '../shopify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private serve:ShopifyService,private router:Router) { }

  ngOnInit(): void {

  }
  
  view(id:any){
  }


}
