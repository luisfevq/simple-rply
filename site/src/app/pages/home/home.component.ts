import { Component, OnInit } from '@angular/core';
import { NotifyService } from 'src/app/services/notify.service';
import { StorageUtil } from 'src/app/util/storage';
import { RipleyService } from 'src/app/services/ripley.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProductsApi: any = [];
  listProductsSKU = [
    '2000374166522p',
    '2000376649535p',
    '2000376584805p',
    '406271',
    '2000375722154P',
    '2000372444561p',
    '2000374782241p',
    '2000376584812p',
    '2000375722161p',
  ];

  token = '';

  constructor(
    private ripleyService: RipleyService,
    private notify: NotifyService,
    private storage: StorageUtil) {

    const user = JSON.parse(this.storage.obtenerUser());
    if (user !== null) {
      this.token = user.token;
    }
    this.lisarProductos();
  }

  ngOnInit() {
    this.notify.session$.subscribe((sesion) => {
      const user = JSON.parse(this.storage.obtenerUser());
      this.token = user.token;
      this.lisarProductos();
    });
  }

  lisarProductos() {
    this.listProductsSKU.forEach((element) => {
      // leer token NotifyService, storage
      this.ripleyService.getDataProductId(element, this.token).subscribe((response) => {
        console.log(response);
        this.listProductsApi.push(response);
      }, (error) => {
        console.error(error);
      });
    });
  }

}
