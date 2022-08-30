import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any =[];
  public grandTotal : number = 0;
  qty:any;
  curtotal:any;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice()
      console.log("prdct",this.product[0]);
      console.log("qty",this.qty);
      
      
    })
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  select(){
    this.curtotal = this.product[0].Price * this.qty
    console.log(this.curtotal);
    console.log("qty",this.qty);
    
  }
  place(){
    alert('Order Placed Successfully')
  }
}
