import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockBuildsService } from './services/in-memory.service';
import { BuildsService } from './services/builds.service';
import {InitialLetterCapitalizePipe} from './pipes/initial-letter-capitalize-pipe';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {
    AppComponent,
    BuildDetailComponent,
    PieChartComponent,
    ProgressBarComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [AppComponent,BuildDetailComponent, InitialLetterCapitalizePipe
    ,PieChartComponent , ProgressBarComponent ],
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(MockBuildsService),
        ChartsModule
    ],
    providers: [ BuildsService ]
    
})
export class AppModule {}