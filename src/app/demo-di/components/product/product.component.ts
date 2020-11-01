import {Component, OnInit, Provider} from '@angular/core';
import {ProductServie} from '@app/demo-di/service/product.service';
import {ProductModel} from "@app/demo-di/service/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private productService: ProductServie) { }

  ngOnInit() {
    this.productService.getProductName().subscribe(
      response => {
        console.log(response);
      }
    );
    const result = {} as ProductModel;
    result.name = 'Rice';
    result.description = 'Yum';
    this.productService.createProduct(result).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  handleFileInput(files: File[]) {
    this.fileToUpload = files[0];
  }

  uploadFileToActivity() {
    this.productService.postFile(this.fileToUpload).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
