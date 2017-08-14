import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BuildsService {
    constructor(private http: Http) {}

    getBuilds() {
        return this.http.get('api/builds')
                .map((response) => {
                    const json = response.json();

                    if (response.ok) {
                        return json.data as any[];
                    } else {
                        return this.logError(json.data);
                    }
                });
    }

    private logError(error: any) {
        try {
            error = error.json();
            console.error(error.error);
        } catch(e) {
            console.error(error);
        }

        return Observable.throw(error);
    }
}