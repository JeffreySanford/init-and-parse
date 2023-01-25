import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'init-and-parse-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'ui';
  value: any;

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getData().subscribe((values: any) =>{
      debugger
      this.value = values.values;
    })
  }
}
