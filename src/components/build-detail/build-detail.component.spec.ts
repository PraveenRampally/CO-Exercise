import {
    async,
    TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA }  from '@angular/core';

import { BuildDetailComponent } from './build-detail.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import {InitialLetterCapitalizePipe} from '../../pipes/initial-letter-capitalize-pipe';

describe('Component: BuildDetailComponent', () => {
    let component: BuildDetailComponent;
    let fixture: any;
    let debugElement: any;
    let element : any;

beforeEach(async(() => {
     TestBed.configureTestingModule({
            declarations: [PieChartComponent, ProgressBarComponent, InitialLetterCapitalizePipe,BuildDetailComponent],
            schemas:      [ NO_ERRORS_SCHEMA ]
        });
       
        TestBed.compileComponents();
  }));

    it('should have a defined component', () => {
        fixture = TestBed.createComponent(BuildDetailComponent);
        expect(fixture.debugElement.nativeElement).toBeDefined();
    });

    it('should return array from getPieData is called', () => {
         fixture = TestBed.createComponent(BuildDetailComponent);
         component = fixture.componentInstance;
         expect(component.getPieData(10,20)).toEqual([10,20]);
        });


    it('should render metrics build details when metrics (details) are given', () => {
         fixture = TestBed.createComponent(BuildDetailComponent);
         component = fixture.componentInstance;

         component.detail = {
				"name": "metrics",
				"testCount": 64,
				"maintainability": 53,
				"security": 64,
				"workmanship": 72
			};
            component.tilebackground = 'tile-rejected';
            component.tileborder = 'tile-border-failed';

            fixture.detectChanges();
            const domContent = fixture.debugElement.nativeElement.textContent;

            expect(domContent).toContain('Metrics');
            expect(domContent).toContain('64');
            expect(domContent).toContain('53');
            expect(domContent).toContain('Maintainability');
            expect(domContent).toContain('64');
            expect(domContent).toContain('Security');
            expect(domContent).toContain('72');
            expect(domContent).toContain('Workmanship');
    });

    it('should render debug build details when debug (details) are given', () => {
         fixture = TestBed.createComponent(BuildDetailComponent);
         component = fixture.componentInstance;

         component.detail = {
				"name": "build",
				"debug": true,
				"release": false,
				"startTime": "4/18/2016 10:30AM"
			};

            component.tilebackground = 'tile-rejected';
            component.tileborder = 'tile-border-failed';

            fixture.detectChanges();
            const domContent = fixture.debugElement.nativeElement.textContent;
            
            expect(domContent).toContain('Build');
            expect(domContent).toContain('Debug');
            expect(domContent).toContain('Release');
            expect(domContent).toContain('4/18/2016 10:30AM');

    });

});