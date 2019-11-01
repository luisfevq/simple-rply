import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private cabeceras: any;

  constructor(private http: HttpClient) {
    this.cabeceras = new Headers();
    this.cabeceras.append('Access-Control-Allow-Origin', '*');
    this.cabeceras.append('Access-Control-Allow-Methods', 'GET, POST');
    this.cabeceras.append('Content-Type', 'application/json');
  }

  getDataProductId(porductSKU: string) {
    return this.http.get('http://localhost:4000/product/' + porductSKU,
      { headers: this.cabeceras });
  }
}
