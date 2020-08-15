import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesTotal:any;
  moviesData:any;
  movies: any = [];
  movieyear: any = [];
  filterList:any=[];
  inputVal:any;
  movielisterror:String;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getmoviedata().subscribe((data: any) => {
      console.log(data);
      this.moviesTotal = data.total;
      this.moviesData = data.data;
    });
  }
  onPressEnter($event){
    console.log("Entered text: ",$event.target.value);
    this.inputVal = $event.target.value;
    this.filterList = this.moviesData.filter((movieObject)=>movieObject.Year === parseInt(this.inputVal))
  // } 
  // getmovieslist() {
   
  }

}
