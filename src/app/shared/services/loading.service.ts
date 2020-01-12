import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public showLoadingBlock: boolean = true;
  
  constructor() { }
}
