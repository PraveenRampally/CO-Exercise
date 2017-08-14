import { Component, OnInit} from '@angular/core';

import { BuildsService } from '../../services/builds.service';

@Component({
    selector: 'build-dashboard-app',
    styles: [require('./app.component.less').toString()],
    template: require('./app.component.html')
})
export class AppComponent implements OnInit {
    builds: any[] = null;

    constructor(private buildsService: BuildsService) {
    }

    ngOnInit() {
        this.buildsService.getBuilds().subscribe((builds: any[]) => {
            this.builds = builds;
        });
    }
}