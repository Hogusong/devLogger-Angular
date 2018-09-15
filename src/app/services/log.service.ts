import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

import { Log } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ 
    id: null, text: null, date: null
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date("12/05/2016 12:54:26")},
      { id: '2', text: 'Added Bootstrap', date: new Date("08/25/2018 17:08:12")},
      { id: '3', text: 'Angular Services', date: new Date("02/07/2016 14:51:00")},
      { id: '4', text: 'Take BootCamp Course', date: new Date("10/07/2017 10:04:16")}
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs)
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(log: Log) {
    this.logs.unshift(log);
  }

  updateLog(log: Log){
    this.logs.forEach((cur, idx) => {
      if (log.id === cur.id) {
        this.logs.splice(idx, 1);
        return
      }
    });
    this.logs.unshift(log);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, idx) => {
      if (log.id === cur.id) {
        this.logs.splice(idx, 1);
        return
      }
    });
  }
}
