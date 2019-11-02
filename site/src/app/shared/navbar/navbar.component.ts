import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RipleyService } from 'src/app/services/ripley.service';
import { Subscription } from 'rxjs';
import { NotifyService } from 'src/app/services/notify.service';
import { StorageUtil } from 'src/app/util/storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  loading = false;

  userForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private loginService: RipleyService,
    private notify: NotifyService,
    private storage: StorageUtil) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }

  iniciarSession() {
    const email = this.userForm.value.email;
    const password = this.userForm.value.password;

    if (this.userForm.valid) {
      this.subscription = this.loginService.login(email, password).subscribe((result: any) => {

        this.notify.session$.emit(true);
        const datos = {
          sesion  : result.ok,
          usuario : result.usuario,
          token   : result.token
        };
        this.storage.eliminarUser();
        this.storage.guardarUser(datos);
      });
    }
  }

}
