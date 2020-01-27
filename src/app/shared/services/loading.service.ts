import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store/reducers';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    constructor(private store: Store<fromStore.State>) {}

    show() {
        this.store.select<any>('authUser').subscribe(res => {
            if (res.loading && document.getElementById('loader')) {
                document.getElementById('loader').classList.remove('hidden');
            }
        });
    }

    hide() {
        this.store.select<any>('authUser').subscribe(res => {
            if (!res.loading && document.getElementById('loader')) {
                document.getElementById('loader').classList.add('hidden');
            }
        });
    }
}
