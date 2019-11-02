import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StorageUtil {

  private currentUserSubject: BehaviorSubject<any>;
  private currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  guardarUser(userArray: any) {
    this.grabarLocalStorage('currentUser', userArray);
  }
  eliminarUser() {
    this.borrarLocalStorage('currentUser');
  }
  obtenerUser() {
    return this.leerLocalStorage('currentUser');
  }


  private grabarLocalStorage(storage: string, arreglo: any) {
    return localStorage.setItem(storage, JSON.stringify(arreglo));
  }
  private leerLocalStorage(storage: string) {
    if (localStorage.getItem(storage)) {
      return localStorage.getItem(storage);
    } else {
      return null;
    }
  }
  private borrarLocalStorage(storage: string) {
    return localStorage.removeItem(storage);
  }

}


