import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

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

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.listProductsSKU.forEach((element) => {
      this.testService.getDataProductId(element).subscribe((response) => {
        console.log(response);
        this.listProductsApi.push(response);
        console.log(this.listProductsApi);
      }, (error) => {
        console.error(error);
      });
    });

  }

}
