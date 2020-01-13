import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  show() {
    if (document.getElementById('loader')) {
      document.getElementById('loader').classList.remove('hidden');
    }
  }

  hide() {
    if (document.getElementById('loader')) {
      document.getElementById('loader').classList.add('hidden');
    }
  }
}
