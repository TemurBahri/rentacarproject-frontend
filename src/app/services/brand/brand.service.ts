import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Brand } from 'src/app/models/brand/brand';
import { ResponseModel } from 'src/app/models/responseModel';
import { ItemResponseModel } from 'src/app/models/itemResponseModel';
@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44346/api/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = environment.apiUrl + 'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand: Brand): Observable<ResponseModel> {
    let newPath = environment.apiUrl + 'brands/add';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
  update(brand: Brand): Observable<ResponseModel> {
    let newPath = environment.apiUrl + 'brands/update';
    return this.httpClient.post<ResponseModel>(newPath, brand);
  }
  getBrand(id: Number): Observable<ItemResponseModel<Brand>> {
    let newPath = environment.apiUrl + 'brands/getbyid?id=' + id;
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath);
  }
}
