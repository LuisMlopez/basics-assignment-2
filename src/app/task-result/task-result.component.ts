import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-result',
  templateUrl: './task-result.component.html',
  styleUrls: ['./task-result.component.css']
})
export class TaskResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username = '';

  onResetUsername() {
    this.username = ''
  }

}
