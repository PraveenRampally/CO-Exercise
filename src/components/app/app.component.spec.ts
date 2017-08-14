import {
    async,
    TestBed
} from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildsService } from '../../services/builds.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {InitialLetterCapitalizePipe} from '../../pipes/initial-letter-capitalize-pipe';
const testData = ['Apple', 'Boy'];

@Injectable()
    class MockBuildsService {
        public getBuilds(): Observable<any[]> {
        return Observable.of(testData);
        }
    }

describe('Component: AppComponent', () => {

    let component: AppComponent;
    let fixture: any;
    let debugElement: any;
    let element: any;
    let mockBuildsService: MockBuildsService;

    mockBuildsService = new MockBuildsService();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent,InitialLetterCapitalizePipe],
            schemas: [NO_ERRORS_SCHEMA]
        });

        TestBed.overrideComponent(AppComponent, {
            set: {
                providers: [
                    { provide: BuildsService, useValue: mockBuildsService }
                ]
            }
        });

        TestBed.compileComponents();
    }));

    it('should have a defined component', () => {
        fixture = TestBed.createComponent(AppComponent);
        expect(fixture.debugElement.nativeElement).toBeDefined();
    });

    it('should get builds data from api on ngOnInit', () => {

        const spy = spyOn(mockBuildsService, 'getBuilds').and.returnValue(
            Observable.of(testData)
        );

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

        expect(component.builds).toEqual(null);
        component.ngOnInit();
        fixture.detectChanges();
        expect(component.builds).toEqual(['Apple', 'Boy']);
        expect(spy.calls.any()).toEqual(true);
    });

it('should render Build row when build is returned from api', () => {

    const buildData = [{
             "id": 1,
             "type": "build",
             "name": "Tenrox_R1_1235",
             "owner": "",
             "startTime": "",
             "state": "pending",
             "metrics": "",
             "build": "",
             "unit": "",
             "functional": "",
             "result": {}
    }];

        const spy = spyOn(mockBuildsService, 'getBuilds').and.returnValue(
            Observable.of(buildData)
        );

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

       
        fixture.detectChanges();
        const domContent = fixture.debugElement.nativeElement.textContent;

        expect(domContent).toContain('Tenrox_R1_1235');
        expect(domContent).toContain('Pending');
    });

    it('should render Firewall row when firewall is returned from api', () => {

    const buildData = [{
             "id": 2,
             "type": "firewall",
             "name": "432462",
             "owner": "jtuck",
             "startTime": "4/18/2016 10:20AM",
             "state": "running",
             "metrics": "running",
             "build": "",
             "unit": "",
             "functional": "",
             "result": {}
         }];

        const spy = spyOn(mockBuildsService, 'getBuilds').and.returnValue(
            Observable.of(buildData)
        );

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;

       
        fixture.detectChanges();
        const domContent = fixture.debugElement.nativeElement.textContent;

        expect(domContent).toContain('432462');
        expect(domContent).toContain('jtuck');
        expect(domContent).toContain('4/18/2016 10:20AM');
    });
});