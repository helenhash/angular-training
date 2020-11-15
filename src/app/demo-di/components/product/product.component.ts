import {Component, OnInit} from '@angular/core';
import {ProductServie} from '@app/demo-di/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  fileToUpload: File = null;
  productName: string;
  constructor(private productService: ProductServie) { }

  ngOnInit() {

    // const result = {} as ProductModel;
    // result.name = 'Rice';
    // result.description = 'Yum';
    // this.productService.createProduct(result).subscribe(
    //   response => {
    //     console.log(response);
    //   }
    // );
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

  getProductName() {
    this.productService.getProduct().subscribe(
      response => {
        console.log(response);
        this.productName = response.name;
      }
    );
  }
}
