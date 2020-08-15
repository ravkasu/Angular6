import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'football-list';

  matches: any;
  footballlist: any = [];
  football: any = [];
  footballyear: any = [];
  options:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() { this.getfootballyear(); }

  getfootballlist(val) {
    console.log(val);
    // collecting click value and kept condition
    this.apiService.getfootball().subscribe((data: any) => {
      this.matches = data.total;
      console.log(data.data);
      data.data.forEach(function (x) {
        var validateYear = x.year;
        console.log(validateYear);
        if (val === validateYear) {          
            console.log(data);
            this.footballlist=data.data;
            console.log(this.footballlist);
        }
      });
    });
  }
  getfootballyear() {
    this.football = [];
    this.apiService.getfootball().subscribe((data: any) => {
      console.log(data);
      // seperating the year from data
      this.football = data.data.map(function (item) {
        return item.year;
      })
      console.log(this.football);
      // unique year
      this.footballyear = Array.from(new Set(this.football));
      console.log(this.footballyear);
    });
  }
}

