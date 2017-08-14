import {
    async,
    TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA }  from '@angular/core';

import { ProgressBarComponent } from './progress-bar.component';

describe('Component: ProgressBarComponent', () => {
    let component: ProgressBarComponent;
    let fixture: any;
    let debugElement: any;
    let element : any;

beforeEach(async(() => {
     TestBed.configureTestingModule({
            declarations: [ ProgressBarComponent],
            schemas:      [ NO_ERRORS_SCHEMA ]
        });
       
        TestBed.compileComponents();
  }));

    it('should have a defined component', () => {
        fixture = TestBed.createComponent(ProgressBarComponent);
        expect(fixture.debugElement.nativeElement).toBeDefined();
    });


   it('should render progress bar for passed coverage', () => {

         fixture = TestBed.createComponent(ProgressBarComponent);
         component = fixture.componentInstance;

         component.coverage = 90;

            fixture.detectChanges();
            const domContent = fixture.debugElement.nativeElement.textContent;

            expect(domContent).toContain('90% covered');
    });

});