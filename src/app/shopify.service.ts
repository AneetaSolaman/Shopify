import { Injectable } from '@angular/core';
import { Products } from './model/products';
import { Tag } from './model/tag';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {
public viewitem:any
  constructor() { }

  getProductByTag(id:number): Products{
  return this.getAll().find(product => product.id == id)!; 
  }

  getAllProductByTag(tag:string):Products[] {
    return tag == "All" ? this.getAll() : this.getAll().filter(product => product.tags?.includes(tag))
  }

  category():Tag[]{
    return[
      { name:'All',image:'./assets/all1.webp'},
      { name:'Men',image:'./assets/m5.jpg'},
      { name:'Women',image:'./assets/w8.webp'},
      { name:'Kids',image:'./assets/dpppp.webp'},
      { name:'Electronics',image:'./assets/e1.jpg'},
      { name:'Home-Appliance ',image:'../assets/h5.jpg'}
    ]
  }

  getAll():Products[] {
    return [
    {id:1,Price:2000,Size:"FS",Color:"Pink",tags:["All","Women"],ProductName:"PINK LINED FROCK",image:"../../assets/w2.webp",Description:"Elegant dress.Ready to go style"},
    {id:2,Price:5000,Size:"FS",Color:"Yellow",tags:["All","Women"],ProductName:"YELLOW FROCK",image:"../../assets/w3.webp",Description:"Elegant dress.Ready to go style"},
    {id:3,Price:5000,Size:"FS",Color:"Red",tags:["All","Women"],ProductName:"CHECKTOP N SKIRT",image:"../../assets/w4.webp",Description:"Elegant dress.Ready to go style"},
    {id:4,Price:5000,Size:"FS",Color:"Pink",tags:["All","Women"],ProductName:"PINK TOP",image:"../../assets/w5.webp",Description:"Elegant dress.Ready to go style"},
    {id:5,Price:5000,Size:"FS",Color:"White",tags:["All","Women"],ProductName:"SMOKING TOP N SKIRT",image:"../../assets/w8.webp",Description:"Elegant dress.Ready to go style"},
    {id:6,Price:5000,Size:"FS",Color:"Red",tags:["All","Women"],ProductName:"RED DRESS",image:"../../assets/w6.webp",Description:"Elegant dress.Ready to go style"},
    {id:7,Price:5000,Size:"FS",Color:"Orange",tags:["All","Women"],ProductName:"ORANGE TOP",image:"../../assets/w7.webp",Description:"Elegant dress.Ready to go style"},
    {id:8,Price:5000,Size:"FS",Color:"Yellow",tags:["All","Women"],ProductName:"YELLO DRESS",image:"../../assets/pretty-red-head-woman-yellow-dress-posing-yellow-summer-mood_273443-4421.webp",Description:"Elegant dress.Ready to go style"},
    {id:9,Price:2500,Size:"FS",Color:"Multicolor",tags:["All","Men"],ProductName:"CHECK SHIRT",image:"../../assets/M1.webp",Description:"Elegant dress.Ready to go style"},
    {id:10,Price:2500,Size:"FS",Color:"Black",tags:["All","Men"],ProductName:"BLACK JACKET",image:"../../assets/M2.webp",Description:"Elegant dress.Ready to go style"},
    {id:11,Price:2500,Size:"FS",Color:"Maroon",tags:["All","Men"],ProductName:"MAROON JACKET",image:"../../assets/m3.jpg",Description:"Elegant dress.Ready to go style"},
    {id:12,Price:2500,Size:"FS",Color:"Navyblue",tags:["All","Men"],ProductName:"NAVYBLUE JACKET",image:"../../assets/m4.jpg",Description:"Elegant dress.Ready to go style"},
    {id:13,Price:2500,Size:"FS",Color:"Brown",tags:["All","Men"],ProductName:"BROWN JACKET",image:"../../assets/m5.jpg",Description:"Elegant dress.Ready to go style"},
    {id:14,Price:2500,Size:"FS",Color:"Black",tags:["All","Men"],ProductName:"LEATHER JACKET",image:"../../assets/m6.jpg",Description:"Elegant dress.Ready to go style"},
    {id:15,Price:9000,Size:"FS",Color:"Stripe",tags:["All","Kids"],ProductName:"KIDS STRPPED DRESS",image:"../../assets/kid3.jpg",Description:"Elegant dress.Ready to go style"},
    {id:16,Price:9000,Size:"FS",Color:"White",tags:["All","Kids"],ProductName:"KIDS WHITE JACKET",image:"../../assets/kid4.jpg",Description:"Elegant dress.Ready to go style"},
    {id:17,Price:9000,Size:"FS",Color:"White",tags:["All","Kids"],ProductName:"WHITE KURUTA KIDS",image:"../../assets/kid8.jpg",Description:"Elegant dress.Ready to go style"},
    {id:18,Price:9000,Size:"FS",Color:"Pink",tags:["All","Kids"],ProductName:"PINK KIDS DRESS",image:"../../assets/kid7.jpg",Description:"Elegant dress.Ready to go style"},
    {id:19,Price:9000,Size:"FS",Color:"Black",tags:["All","Kids"],ProductName:"KIDS BLACK JACKET",image:"../../assets/kk1.jpg",Description:"You can change this TV into a full-fledged PC using the Personal Computer mode "},
    {id:20,Price:7000,Size:"FS",Color:"Black",tags:["All","Kids"],ProductName:"BLUE SHIRT KIDS",image:"../../assets/kk3.jpg",Description:" Cool retro vintage camera design hip flask Detachable neck strap Solid stainless steel and PU leather trim Water tight screw top fastening "},
    {id:21,Price:7000,Size:"FS",Color:"Pink",tags:["All","Electronics"],ProductName:"SONY",image:"../../assets/e1.jpg",Description:"Are you looking for a wireless earbud-type headset that delivers an impressive playback time? If your answer is yes, bring home the boAt Airdopes 131 that comes with a carrying case. This carrying case also acts as a 650 mAh portable charger that extends the playback time of these earbuds by up to 15 hours, i.e. 4 times its normal charging capacity "},
    {id:22,Price:70000,Size:"FS",Color:"White",tags:["All","Electronics"],ProductName:"TAPE",image:"../../assets/e4.jpg",Description:"Cave Wagon R Android Car Stereo adds a spectacular style to your car with its immersive 10"},
    {id:23,Price:50000,Size:"FS",Color:"White",tags:["All","Electronics"],ProductName:"VINTAGE CAMERA",image:"../../assets/e2.jpg",Description:"Cave Wagon R Android Car Stereo adds a spectacular style to your car with its immersive 10"},
    {id:24,Price:120800,Size:"FS",Color:"Multi-Color",tags:["All","Electronics"],ProductName:"Iphone",image:"../../assets/i1.jpg",Description:"Cave Wagon R Android Car Stereo adds a spectacular style to your car with its immersive 10"},
    {id:25,Price:12000,Size:"FS",Color:"Grey",tags:["All","Home-Appliance"],ProductName:"FRIDGE",image:"../../assets/hh2.webp",Description:""},
    {id:26,Price:3000,Size:"FS",Color:"White",tags:["All","Home-Appliance"],ProductName:"WASHING MACHINE",image:"../../assets/hh1.webp",Description:""},
    {id:27,Price:3000,Size:"FS",Color:"Red",tags:["All","Home-Appliance"],ProductName:"MIXER GRINDER",image:"../../assets/hh3.webp",Description:""},
    {id:28,Price:7000,Size:"FS",Color:"Grey",tags:["All","Home-Appliance"],ProductName:"COFFEE MAKER",image:"../../assets/hh4.webp",Description:""},

  ]
}

  // getData(){
  //   return <any>(this.database)
  //   }

  // viewDatabyId(id:any){
  //   this.database.forEach((item:any)=> {
  //     if(item.id == id){
  //       this.viewitem = item
  //       return this.viewitem
  //     }
  //   });
  // }


}
