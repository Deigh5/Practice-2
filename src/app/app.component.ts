import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examples';
  months = ["Jan","Feb","Mar","April","May","Jun","Jul","Aug","Sep","Oct"]
  newMonth: string
  addMonth()
  {
      this.months.push(this.newMonth);    
  }

  deleteMonth(month)
  {
    let index = this.months.indexOf(month)
    this.months.splice(index,1)
  }
}