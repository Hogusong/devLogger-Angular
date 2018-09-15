import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/models';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  log: Log;

  constructor(private logService: LogService) { }

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe(log => {
      this.log = log;
    })
  }

}
