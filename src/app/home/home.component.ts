import { Component, OnInit } from '@angular/core';
import { ShopifyService } from '../shopify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from '../model/products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Products[] = [];
  
  constructor(private serve:ShopifyService,private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchItem'])
      this.products = this.serve.getAll().filter(product => product.ProductName.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if(params['tag'])
      this.products = this.serve.getAllProductByTag(params['tag'])
      else
        this.products = this.serve.getAll();
    })
    console.log(this.products);
    
  }

}
