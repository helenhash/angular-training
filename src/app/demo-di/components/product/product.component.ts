import {Component, OnInit, Provider} from '@angular/core';
import {ProductService} from '@app/demo-di/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    console.log(this.productService.getProductName());
    console.log(this.productService.demoPromise());
  }
}
