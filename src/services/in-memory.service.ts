import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockBuildsService implements InMemoryDbService {
	createDb() {
		const builds = [{
			"id": 1,
			"type": "build",
			"name": "Tenrox_R1_1235",
			"owner": "",
			"startTime": "",
			"state": "pending",
			"metrics": "",
			"build":"",
			"unit": "",
		   "functional": "",
		   "result" :{}
	},
	{
			"id": 2,
			"type": "firewall",
			"name": "432462",
			"owner": "jtuck",
			"startTime": "4/18/2016 10:20AM",
			"state": "running",
			"metrics": "running",
			"build":"",
			"unit": "",
			"functional": "",
			"result":{}
	},
		{
			"id": 3,
			"type": "firewall",
			"name": "432459",
			"owner": "jtuck",
			"startTime": "4/18/2016 10:20AM",
			"state": "rejected",
			"metrics": "passed",
			"build":"passed",
			"unit": "passed",
			"functional": "failed",
			"details": [{
				"name": "metrics",
				"testCount": 64,
				"maintainability": 53,
				"security": 64,
				"workmanship": 72
			}, {
				"name": "build",
				"debug": true,
				"release": false,
				"startTime": "4/18/2016 10:30AM"
			}, {
				"name": "unit",
				"pass": 142,
				"fail": 10,
				"coverage": 76
			}, {
				"name": "functional",
				"pass": 4321,
				"fail": 2145,
				"coverage": 23
			}],
			"result": {
				"type": "change Rejected",
				"message": "metrics Reduction"
			}
		}, 
		{
			"id": 4,
			"type": "build",
			"name": "Tenrox_R1_1235",
			"owner": "samy",
			"startTime": "4/18/2016 12:12PM",
			"state": "complete",
			"metrics": "passed",
			"build":"passed",
			"unit": "passed",
			"functional": "passed",
			"details": [{
				"name": "metrics",
				"testCount": 64,
				"maintainability": 53,
				"security": 64,
				"workmanship": 72
			}, {
				"name": "build",
				"debug": true,
				"release": false,
				"startTime": "4/18/2016 12:12PM"
			}, {
				"name": "unit",
				"pass": 142,
				"fail": 10,
				"coverage": 76
			}, {
				"name": "functional",
				"pass": 4321,
				"fail": 2145,
				"coverage": 23
			}],
			"result": {
				"type": "completed",
				"message": ""
			}
		},
		{
			"id": 5,
			"type": "firewall",
			"name": "432459",
			"owner": "jtuck",
			"startTime": "4/16/2016 09:20AM",
			"state": "rejected",
			"metrics": "passed",
			"build":"passed",
			"unit": "passed",
			"functional": "failed",
			"details": [{
				"name": "metrics",
				"testCount": 64,
				"maintainability": 53,
				"security": 64,
				"workmanship": 72
			}, {
				"name": "build",
				"debug": true,
				"release": false,
				"startTime": "4/18/2016 10:30AM"
			}, {
				"name": "unit",
				"pass": 142,
				"fail": 10,
				"coverage": 76
			}, {
				"name": "functional",
				"pass": 4321,
				"fail": 2145,
				"coverage": 23
			}],
			"result": {
				"type": "change Rejected",
				"message": "metrics Reduction"
			}
		},
		{
			"id": 6,
			"type": "firewall",
			"name": "432455",
			"owner": "jtuck",
			"startTime": "4/17/2016 10:20PM",
			"state": "accepted",
			"metrics": "passed",
			"build":"passed",
			"unit": "passed",
			"functional": "passed",
			"details": [{
				"name": "metrics",
				"testCount": 64,
				"maintainability": 53,
				"security": 64,
				"workmanship": 72
			}, {
				"name": "build",
				"debug": true,
				"release": false,
				"startTime": "4/17/2016 10:30PM"
			}, {
				"name": "unit",
				"pass": 142,
				"fail": 10,
				"coverage": 76
			}, {
				"name": "functional",
				"pass": 4321,
				"fail": 2145,
				"coverage": 23
			}],
			"result": {
				"type": "Change Accepted",
				"message": "Auto-Merged"
			}
		}];

		return { builds };
	}
}