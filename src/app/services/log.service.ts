import { Injectable } from '@angular/core';

import { Log } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date("12/05/2016 12:54:26")},
      { id: '2', text: 'Added Bootstrap', date: new Date("08/25/2018 17:08:12")},
      { id: '3', text: 'Angular Services', date: new Date("02/07/2016 14:51:00")},
      { id: '4', text: 'Take BootCamp Course', date: new Date("10/07/2017 10:04:16")}
    ]
  }

  getLogs() {
    return this.logs
  }
}
