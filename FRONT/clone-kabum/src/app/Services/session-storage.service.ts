import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private storage!: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  //Converte o objeto em JSON
  setObject(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    return this.storage.getItem(key);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
