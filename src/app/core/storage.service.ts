import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get(name: string): any[] | undefined {
    const currentUser = JSON.parse(localStorage.getItem(name)!) ?? undefined
    return currentUser
  }

  set(name: string, value: any[]) {
    localStorage.setItem(name, JSON.stringify(value));
  }
}
