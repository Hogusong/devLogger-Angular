import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/models';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: Date;
  isNew: boolean = true;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        this.isNew = false;
      }
    })
  }

  onSubmit() {
    // check this log is new or not
    if (this.isNew) {
      const id = this.generateUUID();
      const newLog = { id: id, text: this.text, date: new Date() };
      console.log(newLog)
      this.logService.addLog(newLog);
    } else {
      this.logService.updateLog({id: this.id, text: this.text, date: new Date()});
    }
    this.onClear()
  }

  generateUUID(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  onClear() {
    this.id = '';
    this.text = '';
    this.isNew = true;
  }
}
