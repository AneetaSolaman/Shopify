import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../model/tag';
import { ShopifyService } from '../shopify.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  @Input()
  productsTags?:string[];
  tags?:Tag[] = [];


 category :any=[];

  constructor(private ss:ShopifyService) { }

  ngOnInit(): void {
    if(!this.productsTags)
    this.tags = this.ss.category();
    console.log(this.tags);
    
  }

}
