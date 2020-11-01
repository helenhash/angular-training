import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModel} from "@app/demo-di/service/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductServie {

  constructor(private http: HttpClient) { }

  getProductName(): Observable<any> {
    return this.http.get<any> ('/api/spring-rest/product');
  }

  createProduct(models: ProductModel): Observable<any> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<any>('/api/spring-rest/addProduct', models, httpOptions);
  }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = '/api/spring-rest/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }

}
