import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AppConfig } from 'src/app/app.config';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorsService {
    private modelEndpoint = AppConfig.apiUrl + '/authors';

  constructor(
      private httpClient: HttpClient,
      private loadingService: LoadingService
  ) { }

    findAuthors(serachWord): Observable<any> {
        this.loadingService.show();

        return this.httpClient.get<any>(this.modelEndpoint, {params: {'q': serachWord}})
            .pipe(map((obj: any) => {
                this.loadingService.hide();
                return obj;
            }))
    }
}
