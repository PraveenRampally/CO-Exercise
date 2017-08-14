import {
    async,
    getTestBed,
    TestBed
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions,
    XHRBackend
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';

import { BuildsService } from './builds.service';

describe('Service: BuildsService', () => {
    let backend: MockBackend;
    let service: BuildsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                BuildsService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });

        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(BuildsService);

    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === '/api/builds') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should return the list of forms from the server on success', () => {
        setupConnections(backend, {
            body: [{
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
            },
            {
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
            }
            ],
            status: 200
        });

        service.getBuilds().subscribe((data: any[]) => {
            expect(data.length).toBe(2);
            expect(data[0].id).toBe(1);
            expect(data[1].id).toBe(2);
        });
    });

    it('should log an error to the console on error', () => {
        setupConnections(backend, {
            body: { error: `Something Wrong` },
            status: 500
        });
        spyOn(console, 'error');

        service.getBuilds().subscribe(null, () => {
            expect(console.error).toHaveBeenCalledWith(`Something Wrong`);
        });
    });
});