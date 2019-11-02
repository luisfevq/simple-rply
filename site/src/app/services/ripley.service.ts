import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RipleyService {
  private cabeceras: any;

  constructor(private http: HttpClient) {
    this.cabeceras = new Headers();
    this.cabeceras.append('Access-Control-Allow-Origin', '*');
    this.cabeceras.append('Access-Control-Allow-Methods', 'GET, POST');
    this.cabeceras.append('Content-Type', 'application/json');
  }

  getDataProductId(porductSKU: string, token: string) {

    this.cabeceras = new Headers();
    this.cabeceras.append('Access-Control-Allow-Origin', '*');
    this.cabeceras.append('Access-Control-Allow-Methods', 'GET, POST');
    this.cabeceras.append('Content-Type', 'application/json');
    this.cabeceras.append('token', token);
    console.log(this.cabeceras);
    return this.http.get('http://localhost:4000/product/' + porductSKU,
      { headers: this.cabeceras });
  }

  login(email: string, password: string) {
    return this.http.get('http://localhost:4000/login/' + email + '/' + password,
      { headers: this.cabeceras });
  }

  registro() {
    // TODO: por implementar
  }
}
