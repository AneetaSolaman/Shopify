import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Products } from '../model/products';
import { ShopifyService } from '../shopify.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product!:Products;

  constructor(private db:ShopifyService, private route: ActivatedRoute, private router:Router,private cartService:CartService) { 
    route.params.subscribe((params)=>{
      if(params['id'])
      this.product = this.db.getProductByTag(params['id'])
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addtoCart(this.product)
    this.router.navigateByUrl('/cart')
  }


}
